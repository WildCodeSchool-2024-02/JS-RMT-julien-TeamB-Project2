import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import GameCard from "./GameCard";
import "./VideoGames.css";

function VideoGames() {
  const games = useLoaderData();

  const [showCount, setShowCount] = useState(3);
  const handleShowMore = () => {
    setShowCount(showCount + 6);
  };

  const genres = [...new Set(games.map((game) => game.genre))]; // Get unique genres

  return (
    <div className="videoGamesPage">
      <h1 className="videoGamesTitle">Catalogue</h1>
      {genres.map((genre) => (
        <div key={genre}>
          <h2>{genre}</h2>
          <ul className="videoGamesCardContainer">
            {games
              .filter((game) => game.genre === genre)
              .slice(0, showCount)
              .map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
          </ul>
          {games.filter((game) => game.genre === genre).length > showCount && (
            <button type="button" onClick={handleShowMore}>
              Afficher plus
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default VideoGames;
