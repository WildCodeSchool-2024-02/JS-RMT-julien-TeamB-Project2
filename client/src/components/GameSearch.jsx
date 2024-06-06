import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import logoSearch from "../assets/images/logoSearch.png";
import "./GameSearch.css";

function GameSearch() {
  const [query, setQuery] = useState("");
  const [games, setGames] = useState([]);
  const [searchVisible, setSearchVisible] = useState(false);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    const getFilteredGames = async () => {
      try {
        if (query.length > 3) {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/games?title=${query}`
          );
          setGames(response.data);
        }
      } catch (error) {
        console.error("Error fetching games", error);
      }
    };

    if (query.length >= 3) {
      getFilteredGames();
    } else {
      setGames([]);
    }
  }, [query]);

  const toggleSearchBar = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div>
      {searchVisible ? (
        <div className="gameSearch-Zone">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search for a game"
          />
          <ul className="gameSearch-dropdown">
            {games.map((game) => (
              <li className="gameDropDownList" key={game.id}>
                <Link to={`/articles/${game.id}`}>{game.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <button
          type="button"
          onClick={toggleSearchBar}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
          aria-label="Toggle search bar"
        >
          <img className="navLogoSize" src={logoSearch} alt="Website logo" />
        </button>
      )}
    </div>
  );
}

export default GameSearch;
