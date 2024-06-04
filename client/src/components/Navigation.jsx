import { useState } from "react";
import { Link } from "react-router-dom";
import logoGamingZone from "../assets/images/logoGamingZone.png";
import Category from "./CategoryComponent";
import logoCategory from "../assets/images/logoCategory.png";
import logoCart from "../assets/images/logoCart.png";
import "../App.css";
import "./Navigation.css";

function Navigation() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
              onMouseEnter={handleMouseEnter}
              onClick={handleMouseEnter}
            >
              <img
                className="navLogoSize"
                src={logoCategory}
                alt="Logo catégorie"
              />
            </button>
          </li>
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
      {isHovered && (
        <div
          className="categoryContainer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Category />
        </div>
      )}
    </>
  );
}

export default Navigation;
