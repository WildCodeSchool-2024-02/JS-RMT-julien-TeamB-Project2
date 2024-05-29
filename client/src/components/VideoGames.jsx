import { useState } from "react";

import GameCard from "./GameCard";
import "./VideoGames.css";

function VideoGames({ genre, games }) {
  const [showCount, setShowCount] = useState(3);
  const handleShowMore = () => {
    setShowCount(showCount + 3);
  };

  return (
    <div>
      <h2>{genre}</h2>
      <ul className="videoGamesCardContainer">
        {games.slice(0, showCount).map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </ul>
      {games.length > showCount && (
        <button type="button" onClick={handleShowMore}>
          Afficher plus
        </button>
      )}
    </div>
  );
}

export default VideoGames;
