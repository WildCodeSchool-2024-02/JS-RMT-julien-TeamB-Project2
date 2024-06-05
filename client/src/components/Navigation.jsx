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
  const [isHovered, setIsHovered] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    const id = setTimeout(() => {
      setIsHovered(true);
    }, 500);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  const handleCloseCategory = () => {
    setIsHovered(false);
  };

  const handleCategoryMouseLeave = () => {
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
              className="bgNavMain burgerButton"
              type="button"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="navLogoSize"
                src={logoCategory}
                alt="Logo catégorie"
              />
            </button>
          </li>
          <GameSearch />
          <li>
            <Link to="/panier">
              <img className="navLogoSize" src={logoCart} alt="Logo panier" />
            </Link>
          </li>
        </ul>
      </nav>
      {isHovered && (
        <div
          className="categoryContainer"
          onMouseLeave={handleCategoryMouseLeave}
        >
          <Category close={handleCloseCategory} />
        </div>
      )}
    </>
  );
}

export default Navigation;
