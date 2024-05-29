import { useLoaderData } from "react-router-dom";
import ArticleComponents from "../components/ArticleComponents";
import Footer from "../components/Footer";
import "../App.css";

import Navigation from "../components/Navigation";

function Article() {
  const game = useLoaderData();
  return (
    <main className="styleMain">
      <Navigation />
      <ArticleComponents game={game} />
      <Footer/>
    </main>
  );
}

export default Article;
