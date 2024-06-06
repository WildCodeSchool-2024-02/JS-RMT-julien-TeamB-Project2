import { useLoaderData, useSearchParams } from "react-router-dom";
import VideoGames from "../components/VideoGames";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function Catalog() {
  const genres = useLoaderData();
  const [searchParams] = useSearchParams();

  return (
    <main className="bgColorMain">
      <Navigation />
      <div className="videoGamesPage bgSizeWeb">
        <h1 className="videoGamesTitleH1 styleTitleH1">Catalog</h1>
        {genres
          .filter(
            (genre) =>
              genre === searchParams.get("genre") ||
              searchParams.get("genre") === null
          )
          .map((genre) => (
            <VideoGames key={genre} genre={genre} cls="home" />
          ))}
      </div>
      <Footer />
    </main>
  );
}

export default Catalog;
