import { useLoaderData } from "react-router-dom";
import VideoGames from "../components/VideoGames";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function Catalog() {
  const genres = useLoaderData();

  return (
    <main className="bgColorMain">
      <Navigation />
      <div className="videoGamesPage">
        <h1 className="videoGamesTitle styleTitleH1">Catalogue</h1>
        {genres.map((genre) => (
          <VideoGames key={genre} genre={genre} />
        ))}
      </div>
      <Footer />
    </main>
  );
}

export default Catalog;
