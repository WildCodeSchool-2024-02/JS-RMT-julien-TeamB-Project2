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
  let timeoutId = null;

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      setIsHovered(true);
    }, 250);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  const handleCloseCategory = () => {
    setIsHovered(false);
  };

  const handleCategoryMouseLeave = () => {
    setIsHovered(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsHovered(!isHovered);
    }
  };

  return (
    <>
      <nav className="navContainer navBg">
        <ul className="navButtonContainer">
          <li>
            <Link to="/">
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
              onKeyDown={handleKeyDown}
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
            <Link to="/cart">
              <img
                className="navLogoSize"
                src={logoCart}
                alt="Shopping cart logo"
              />
            </Link>
          </li>
        </ul>
      </nav>
      {isHovered && (
        <div onMouseLeave={handleCategoryMouseLeave}>
          <Category close={handleCloseCategory} />
        </div>
      )}
    </>
  );
}

export default Navigation;
