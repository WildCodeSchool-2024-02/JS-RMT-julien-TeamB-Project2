import { useLoaderData } from "react-router-dom";
import VideoGames from "../components/VideoGames";
import Navigation from "../components/Navigation";

function Catalog() {
  const genres = useLoaderData();

  return (
    <main className="bgColorMain">
      <Navigation />
      <div className="videoGamesPage">
        <h1 className="videoGamesTitle">Catalogue</h1>
        {genres.map((genre) => (
          <VideoGames key={genre} genre={genre} />
        ))}
      </div>
    </main>
  );
}

export default Catalog;
