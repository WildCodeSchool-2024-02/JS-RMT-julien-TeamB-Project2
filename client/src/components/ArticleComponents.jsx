import "./ArticleComponents.css";
import "../App.css";
import { useCart } from "../context/CartContext";

function ArticleComponents({ game }) {
  const { addToCart } = useCart();

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
        <button type="button" onClick={() => addToCart(game)}>
          Ajouter au panier
        </button>
      </div>
    </section>
  );
}

export default ArticleComponents;
