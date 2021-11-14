import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './Routes/Routes';

function App() {
  return (
    <Auth0Provider
    domain="primeros.us.auth0.com"
    clientId="Ock7pvlqaYBmeqoFI9tiGUa77xnYOyEt"
    redirectUri={window.location.origin}
  >
    <Routes />
  </Auth0Provider>
  );
}

export default App;
