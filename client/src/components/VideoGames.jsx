import { useState, useEffect } from "react";
import axios from "axios";

import GameCard from "./GameCard";
import "./VideoGames.css";

function VideoGames({ genre }) {
  const [gamesByGenre, setGamesByGenre] = useState([]);
  const [showCount, setShowCount] = useState(3);
  const handleShowMore = () => {
    setShowCount(showCount + 3);
  };

  const getGames = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/games?genre=${genre}`)
      .then((res) => setGamesByGenre(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getGames();
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <h2>{genre}</h2>
      <ul className="videoGamesCardContainer">
        {gamesByGenre.slice(0, showCount).map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </ul>
      {gamesByGenre.length > showCount && (
        <button type="button" onClick={handleShowMore}>
          Afficher plus
        </button>
      )}
    </main>
  );
}

export default VideoGames;
