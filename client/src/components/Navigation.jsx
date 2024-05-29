import { Link } from "react-router-dom";
import { useState } from "react";

import logoGamingZone from "../assets/images/logoGamingZone.png";
import logoPanier from "../assets/images/logoPanier.png";
import Category from "./CategoryComponent";

import "../App.css";
import "./Navigation.css";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navContainer navBg">
        <ul className="navButtonContainer">
          <Link className="noTextDecoration" to="/app">
            <img className="navLogoSize" src={logoGamingZone} alt="logo" />
          </Link>
          <Link className="noTextDecoration" to="/">
            Catalogue
          </Link>
          <button type="button" onClick={() => setIsOpen(true)}>
            Catégories
          </button>
          <Link className="noTextDecoration" to="/article">
            Article
          </Link>
          <Link className="noTextDecoration" to="/panier">
            <img className="navLogoSize" src={logoPanier} alt="logo" />
          </Link>
        </ul>
      </nav>
      {isOpen && <Category />}
    </>
  );
}

export default Navigation;
