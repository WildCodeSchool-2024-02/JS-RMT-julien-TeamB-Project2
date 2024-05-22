import { useLoaderData } from "react-router-dom";

function Catalog() {
  const games = useLoaderData();
  console.info(games);

  return (
    <main>
      <h1>Bienvenu</h1>
    </main>
  );
}

export default Catalog;
