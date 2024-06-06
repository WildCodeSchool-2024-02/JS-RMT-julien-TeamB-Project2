import { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "./GameCard";
import "./VideoGames.css";

function VideoGames({ genre, gameId, cls }) {
  const [gamesByGenre, setGamesByGenre] = useState([]);
  const [showCount, setShowCount] = useState(4);
  const minimalLength = cls === "article" ? 1 : 0;

  const handleShowMore = () => {
    setShowCount((prevCount) => prevCount + 4);
  };

  const fetchGames = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/games?genre=${genre}`
      );
      setGamesByGenre(response.data);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  useEffect(() => {
    if (genre) {
      fetchGames();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre, gameId]);

  return (
    <section className="videoGamesPage bgSizeWeb">
      {gamesByGenre.length > minimalLength && (
        <>
          <h2 className="videoGamesTitleH2 styleTitleH2">{genre}</h2>
          <ul className="videoGamesCardContainer">
            {gamesByGenre
              .filter((game) => game.id !== gameId)
              .slice(0, showCount)
              .map((game) => (
                <GameCard key={game.id} game={game} cls={cls} />
              ))}
          </ul>
          {gamesByGenre.length > showCount && (
            <button
              className="showMoreButton"
              type="button"
              onClick={handleShowMore}
            >
              Show more
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default VideoGames;
