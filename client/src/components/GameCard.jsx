import { useNavigate } from "react-router-dom";

import "./GameCard.css";

function GameCard({ game }) {
  const navigate = useNavigate();

  return (
    <li>
      <button type="button" onClick={() => navigate(`/articles/${game.id}`)}>
        <img className="gameCardImg" src={game.image} alt={game.title} />
      </button>
      <div className="gameCardBottom">
        <h2 className="styleTitleH2">{game.title}</h2>
        <p className="styleText">{game.genre}</p>
        <p className="styleText">{game.price}€</p>
      </div>
    </li>
  );
}

export default GameCard;
