import { useLoaderData } from "react-router-dom";
import ArticleComponents from "../components/ArticleComponents";
import "../App.css";

import Navigation from "../components/Navigation";

function Article() {
  const game = useLoaderData();
  return (
    <main className="bgColorMain">
      <Navigation />
      <ArticleComponents game={game} />
    </main>
  );
}

export default Article;
