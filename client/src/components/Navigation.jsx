import { Link } from "react-router-dom";

import logoGamingZone from "../assets/images/logoGamingZone.png";
import logoCategorie from "../assets/images/logoCategorie.png";
import logoRechercher from "../assets/images/logoRechercher.png";
import logoPanier from "../assets/images/logoPanier.png";

import "../App.css";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navContainer navBg">
      <ul className="navButtonContainer">
        <Link to="/app">
          <img className="navLogoSize" src={logoGamingZone} alt="logo" />
        </Link>
        <Link to="/">
          <img className="navLogoSize" src={logoCategorie} alt="logo" />
        </Link>
        <Link to="/articles/:id">
          <img className="navLogoSize" src={logoRechercher} alt="logo" />
        </Link>
        <Link to="/panier">
          <img className="navLogoSize" src={logoPanier} alt="logo" />
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
