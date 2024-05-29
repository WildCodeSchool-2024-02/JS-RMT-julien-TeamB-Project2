import {useLoaderData}  from 'react-router-dom';
import GameCard from './GameCard';
import './VideoGames.css';

function VideoGames() {

const games = useLoaderData()

  return (
    <div className="videoGamesPage">
      <h1 className="videoGamesTitle">Catalogue</h1>
      <ul className="videoGamesCardContainer">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </ul>
    </div>
  );
}

export default VideoGames;