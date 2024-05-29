import { Link } from "react-router-dom";
import GameSearch from "./GameSearch";

import logoGamingZone from "../assets/images/logoGamingZone.png";
import logoCategory from "../assets/images/logoCategory.png";
import logoCart from "../assets/images/logoCart.png";

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
        <GameSearch  />
        <Link to="/panier">
          <img className="navLogoSize" src={logoCart} alt="Logo panier" />
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
