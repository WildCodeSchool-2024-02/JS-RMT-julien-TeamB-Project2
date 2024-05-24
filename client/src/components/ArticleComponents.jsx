import "./ArticleComponents.css";
import "../App.css";

function ArticleComponents({ game }) {
  return (
    <section className="articleContainer">
      <img src={game.image} alt={game.title} />
      <div className="articleStyle">
        <h2>{game.title}</h2>
        <p>Genre: {game.genre}</p>
        <p>Description: {game.description}</p>
        <p>Date de Sortie: {game.release_date}</p>
        <p>Développeur:{game.developer}</p>
        <p>Prix: {game.price}€</p>
      </div>
    </section>
  );
}

export default ArticleComponents;
