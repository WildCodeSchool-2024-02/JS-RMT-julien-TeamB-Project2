import "./ArticleComponents.css";
import "../App.css";

function ArticleComponents({ game }) {
  return (
    <section className="articleContainer">
      <img className="articleImg" src={game.image} alt={game.id} />
      <div className="articleStyle">
        <h2 className="articleTitle">{game.title}</h2>
        <p className="articleDescription">Genre: {game.genre}</p>
        <p className="articleDescription">Description: {game.description}</p>
        <p className="articleDescription">
          Date de Sortie: {game.release_date}
        </p>
        <p className="articleDescription">Développeur:{game.developer}</p>
        <p className="articleDescription">Prix: {game.price}€</p>
      </div>
    </section>
  );
}

export default ArticleComponents;
