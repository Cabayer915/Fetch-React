import { useState } from "react";
import { Header } from "../../components/Header";
import background from "../../assets/background.svg";
import ItemList from "../../components/ItemList/index";
import "./styles.css";

function App() {
  const [user, setUser] = useState("");
  const [currentUser, currentSetUser] = useState(null);
  const [repo, setRepo] = useState(null);

  const handleGetData = async () => {
    try {
      const userData = await fetch(`https://api.github.com/users/${user}`);
      const newUser = await userData.json();

      console.log(newUser);

      if (newUser.name) {
        const { avatar_url, name, bio, login } = newUser;
        currentSetUser({ avatar_url, name, bio, login });

        const repoData = await fetch(`https://api.github.com/users/${user}/repos`);
        const newRepo = await repoData.json();
        if (newRepo.length) {
          setRepo(newRepo);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div>
            <input
              name="usuario"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              placeholder="@username"
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser?.name ? (
            <>
              <div className="perfil">
                <img
                  src={currentUser.avatar_url}
                  className="profile"
                  alt="imagem de perfil"
                />

                <div>
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>

              <hr />
            </>
          ) : null}

          {repo?.length ? (
            <>
              <div>
                <h4 className="repositorio">Repositórios</h4>
                {repo.map(rep => (
                  <ItemList title={rep.name} description={rep.description} />
                ))}
              </div>
            </>
          ) : null}

        </div>
      </div>
    </div>
  );
}

export default App;
