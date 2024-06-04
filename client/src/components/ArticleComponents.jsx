import CartButton from "./Button/CartButton";
import "./ArticleComponents.css";
import "../App.css";

function ArticleComponents({ game }) {
  return (
    <section className="articleContainer">
      <img src={game.image} alt={game.title} />
      <div className="articleStyle">
        <h2 className="styleTitleH2">{game.title}</h2>
        <p className="styleText">Genre: {game.genre}</p>
        <p className="styleText">Description: {game.description}</p>
        <p className="styleText">Date de Sortie: {game.release_date}</p>
        <p className="styleText">Développeur:{game.developer}</p>
        <p className="styleText">Prix: {game.price}€</p>
        <CartButton game={game} />
      </div>
    </section>
  );
}

export default ArticleComponents;
