import './GameCard.css';

function GameCard({ game }) {
  return (
    <li>
      <div>
        <img className="gameCardImg" src={game.image} alt={game.title} />
      </div>
      <div className="gameCardBottom">
          <h2>{game.title}</h2>
          <p>{game.genre}</p>
          <p>{game.price}€</p>
      </div>
    </li>
  );
};

export default GameCard;