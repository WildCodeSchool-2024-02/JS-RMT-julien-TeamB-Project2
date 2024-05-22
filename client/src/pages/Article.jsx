import { useLoaderData } from "react-router-dom";
import ArticleComponents from "../components/ArticleComponents";

function Article() {
  const games = useLoaderData();
  return (
    <main>
      <ArticleComponents game={games[0]} />
    </main>
  );
}

export default Article;
