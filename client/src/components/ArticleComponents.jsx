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
        <p className="styleText">Release date: {game.release_date}</p>
        <p className="styleText">Developer:{game.developer}</p>
        <p className="styleText">Price: {game.price}€</p>
        <CartButton game={game} />
      </div>
    </section>
  );
}

export default ArticleComponents;
