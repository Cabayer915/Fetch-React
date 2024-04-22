import React from 'react';
import ReactDOM from 'react-dom/client';
import Styles from './styles.css';
import App from './pages/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
