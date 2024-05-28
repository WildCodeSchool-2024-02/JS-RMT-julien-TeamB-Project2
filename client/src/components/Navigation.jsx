import { Link } from "react-router-dom";

import logoGamingZone from "../assets/images/logoGamingZone.png";
import logoCategory from "../assets/images/logoCategory.png";
import logoRechercher from "../assets/images/logoRechercher.png";
import logoPanier from "../assets/images/logoPanier.png";

import "../App.css";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navContainer navBg">
      <ul className="navButtonContainer">
        <Link to="/app">
          <img
            className="navLogoSize"
            src={logoGamingZone}
            alt="Logo du site"
          />
        </Link>
        <Link to="/">
          <img
            className="navLogoSize"
            src={logoCategory}
            alt="Logo catégorie"
          />
        </Link>
        <Link to="/articles/:id">
          <img
            className="navLogoSize"
            src={logoRechercher}
            alt="Logo rechercher"
          />
        </Link>
        <Link to="/panier">
          <img className="navLogoSize" src={logoPanier} alt="Logo panier" />
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
