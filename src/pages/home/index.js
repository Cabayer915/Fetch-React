import { Header } from "../../components/Header";
import background from "../../assets/background.svg";
import ItemList from '../../components/ItemList/index';
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username" />
            <button>Buscar</button>
          </div>

          <div className="perfil">
            <img
              src="https://avatars.githubusercontent.com/u/126275223?s=96&v=4"
              className="profile"
              alt="imagem de perfil"
            />

            <div>
            <h3>Cauã Ribeiro</h3>
            <span>@Cabayer915</span>
            <p>Descrição</p>
            </div>

          </div>

          <hr />

          <div>
            <h4 className="repositorio">Repositórios</h4>
            <ItemList title={"werref"} description={"wweewewregty"} />
            <ItemList title={"werref"} description={"wweewewregty"} />
            <ItemList title={"werref"} description={"wweewewregty"} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
