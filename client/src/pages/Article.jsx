import { useLoaderData } from "react-router-dom";
import ArticleComponents from "../components/ArticleComponents";
import VideoGames from "../components/VideoGames";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../App.css";

function Article() {
  const game = useLoaderData();

  return (
    <main className="bgColorMain bgSizeWeb">
      <Navigation />
      <ArticleComponents game={game} />
      <VideoGames
        game={game}
        genre={game.genre}
        gameId={game.id}
        cls="article"
      />
      <Footer />
    </main>
  );
}

export default Article;
