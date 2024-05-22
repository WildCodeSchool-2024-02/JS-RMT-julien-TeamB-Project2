import './Catalog.css';

function GameCard({ game }) {
  return (
    <li>
      <div className="Top">
        <img className="GameImg" src={game.image} alt={game.title} />
      </div>
      <div className="Bottom">
          <h2 className="Title">{game.title}</h2>
          <p className="Genre">{game.genre}</p>
          <p className="Price">{game.price}€</p>
      </div>
    </li>
  );
};

export default GameCard;