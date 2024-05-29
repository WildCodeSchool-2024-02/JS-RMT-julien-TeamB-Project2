import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import VideoGames from "../components/VideoGames";
import Navigation from "../components/Navigation";

function Catalog() {
  const games = useLoaderData();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const uniqueGenres = [...new Set(games.map((game) => game.genre))];
    setGenres(uniqueGenres);
  }, [games]);

  return (
    <main>
      <Navigation />
      <div className="videoGamesPage">
        <h1 className="videoGamesTitle">Catalogue</h1>
        {genres.map((genre) => (
          <VideoGames
            key={genre}
            genre={genre}
            games={games.filter((game) => game.genre === genre)}
          />
        ))}
      </div>
    </main>
  );
}

export default Catalog;
