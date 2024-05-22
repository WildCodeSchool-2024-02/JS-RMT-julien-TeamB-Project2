import { useEffect, useState } from "react";
import axios from 'axios';
import GameCard from './GameCard';

function VideoGames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3310/api/games';

    const fetchGames = async () => {
      try {
        const response = await axios.get(apiUrl);
        setGames(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchGames();
  }, []);



  return (
    <div>
      <h1 className="Catalogue">Catalogue</h1>
      <ul>
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </ul>
    </div>
  );
}

export default VideoGames;




  

