import './GameCard.css';

function GameCard({ game }) {
  return (
    <li className='GameCard-LI'>
      <div className="Top">
        <img className="gameImg" src={game.image} alt={game.title} />
      </div>
      <div className="gamecardBottom">
          <h2 className="Title">{game.title}</h2>
          <p className="Genre">{game.genre}</p>
          <p className="Price">{game.price}€</p>
      </div>
    </li>
  );
};

export default GameCard;