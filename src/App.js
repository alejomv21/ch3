import { Auth0Provider } from "@auth0/auth0-react";
import './App.css';
import Routes from './Routes/Routes';

function App() {
  return (
    <Auth0Provider
    domain="ent31.us.auth0.com"
    clientId="SXn3x3JQK3sjgMx4SKJd6Tv2Gva5z3o8"
    redirectUri={window.location.origin}
  >
    <Routes />
  </Auth0Provider>
  );
}

export default App;
