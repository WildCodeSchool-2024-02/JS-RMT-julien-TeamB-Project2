import { Link } from "react-router-dom";

import "./GameCard.css";

function GameCard({ game, cls }) {
  return (
    <li>
      <Link to={`/article/${game.id}`}>
        <img
          className={`gameCardImg ${cls}`}
          src={game.image}
          alt={game.title}
        />
      </Link>
      <div className="gameCardBottom">
        <h2 className="styleTitleH2">{game.title}</h2>
        <p className="styleText">{game.platforms}</p>
        <p className="styleText">{game.price}€</p>
      </div>
    </li>
  );
}

export default GameCard;
