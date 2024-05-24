import { useLoaderData } from "react-router-dom";
import ArticleComponents from "../components/ArticleComponents";
import "../App.css";

function Article() {
  const game = useLoaderData();
  return (
    <main className="articleMain">
      <ArticleComponents game={game} />
    </main>
  );
}

export default Article;
