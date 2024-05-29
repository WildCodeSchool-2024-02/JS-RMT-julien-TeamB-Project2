import { Link } from "react-router-dom";
import { useState } from "react";

import logoGamingZone from "../assets/images/logoGamingZone.png";

import Category from "./CategoryComponent";

import logoCategory from "../assets/images/logoCategory.png";
import logoSearch from "../assets/images/logoSearch.png";
import logoCart from "../assets/images/logoCart.png";

import "../App.css";
import "./Navigation.css";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
              src={logoSearch}
              alt="Logo rechercher"
            />
          </Link>
          <button type="button" onClick={() => setIsOpen(true)}>
            Catégories
          </button>
          <Link to="/panier">
            <img className="navLogoSize" src={logoCart} alt="Logo panier" />
          </Link>
        </ul>
      </nav>
      {isOpen && <Category />}
    </>
  );
}

export default Navigation;
