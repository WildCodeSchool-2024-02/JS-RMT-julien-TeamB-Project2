import { useState, useEffect } from "react";
import axios from "axios";

import GameCard from "./GameCard";
import "./VideoGames.css";

function VideoGames({ genre, gameId, cls }) {
  const [gamesByGenre, setGamesByGenre] = useState([]);
  const [showCount, setShowCount] = useState(4);
  const minimalLenght = cls === "article" ? 1 : 0;
  const handleShowMore = () => {
    setShowCount(showCount + 4);
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
    <section className="videoGamesPage bgSizeWeb">
      {gamesByGenre.length > minimalLenght && (
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
