import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logoSearch from "../assets/images/logoSearch.png";

function GameSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setShowInput(true);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/articles/${searchTerm}`);
    }
  };

  return (
    <section>
      {!showInput ? (
        <button onClick={handleButtonClick}type="button" >
          <img
            className="navLogoSize"
            src={logoSearch}
            alt="search" 
            style={{ cursor: 'pointer' }}
          />
        </button>
      ) : (
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search games "
          />
          <button type="submit">Search</button>
          
        </form>
      )}
    </section>
  );
}

export default GameSearch