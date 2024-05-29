import { Link } from "react-router-dom";

import "./GameCard.css";

function GameCard({ game }) {
  return (
    <li>
      <Link to={`/articles/${game.id}`}>
        <img className="gameCardImg" src={game.image} alt={game.title} />
      </Link>
      <div className="gameCardBottom">
        <h2 className="styleTitleH2">{game.title}</h2>
        <p className="styleText">{game.genre}</p>
        <p className="styleText">{game.price}€</p>
      </div>
    </li>
  );
}

export default GameCard;
