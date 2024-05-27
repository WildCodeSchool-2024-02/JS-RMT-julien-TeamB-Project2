import { Link } from "react-router-dom";

import logoGamingZone from "../assets/images/logoGamingZone.png";
import logoPanier from "../assets/images/logoPanier.png";

import "../App.css";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navContainer navBg">
      <ul className="navButtonContainer">
        <Link className="noTextDecoration" to="/app">
          <img className="navLogoSize" src={logoGamingZone} alt="logo" />
        </Link>
        <Link className="noTextDecoration" to="/">
          Catalogue
        </Link>
        <Link className="noTextDecoration" to="/articles/:id">
          Article
        </Link>
        <Link className="noTextDecoration" to="/panier">
          <img className="navLogoSize" src={logoPanier} alt="logo" />
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
