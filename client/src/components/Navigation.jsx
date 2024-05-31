import { useState } from "react";
import { Link } from "react-router-dom";
import GameSearch from "./GameSearch";
import logoGamingZone from "../assets/images/logoGamingZone.png";
import Category from "./CategoryComponent";
import logoCategory from "../assets/images/logoCategory.png";
import logoCart from "../assets/images/logoCart.png";
import "../App.css";
import "./Navigation.css";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navContainer navBg">
        <ul className="navButtonContainer">
          <li>
            <Link to="/app">
              <img
                className="navLogoSize"
                src={logoGamingZone}
                alt="Logo du site"
              />
            </Link>
          </li>
          <li>
            <button
              className="bgNavMain"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                className="navLogoSize"
                src={logoCategory}
                alt="Logo catégorie"
              />
            </button>
          </li>
            <GameSearch  />
          <li>
            <Link to="/panier">
              <img
                className="navLogoSize"
                src={logoCart}
                alt="Logo panier"
              />
            </Link>
          </li>
        </ul>
      </nav>
      {isOpen && <Category />}
    </>
  );
}

export default Navigation;
