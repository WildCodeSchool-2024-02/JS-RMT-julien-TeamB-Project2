import { useLoaderData } from "react-router-dom";

function Article() {
  const games = useLoaderData();
  console.info(games);

  return (
    <main>
      <h1>Bienvenu</h1>
    </main>
  );
}

export default Article;
