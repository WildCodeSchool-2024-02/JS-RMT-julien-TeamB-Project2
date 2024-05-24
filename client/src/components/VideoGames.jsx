import {useLoaderData}  from 'react-router-dom';
import GameCard from './GameCard';
import './VideoGames.css';

function VideoGames() {

const games = useLoaderData()

  return (
    <div className="VideoGamesPage">
      <h1 className="VideoGamesTitle">Catalogue</h1>
      <ul className="VideoGamesCardContainer">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </ul>
    </div>
  );
}

export default VideoGames;


