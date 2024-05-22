


function GameCard({ game }) {
  return (
    <li>
      <div className="Top">
        <img className="GameImg" src={game.image} alt={game.title} />
      </div>
      <div className="Bottom">
          <h2 className="Title">{game.title}</h2>
          <h2 className="Genre">{game.genre}</h2>
          <h2 className="Price">{game.price}€</h2>
      </div>
    </li>
  );
};

export default GameCard;