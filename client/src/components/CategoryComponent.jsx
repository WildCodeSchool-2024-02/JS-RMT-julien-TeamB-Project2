import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CategoryComponent.css";
import "../App.css";

function Category({ close }) {
  const [genres, setGenres] = useState([]);

  const getGames = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/genres`)
      .then((res) => setGenres(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <section className="categoryMainContainer">
      <button type="button" className="closeButton" onClick={close}>
        ✖
      </button>
      <h2 className="styleTitleH2">GENRES</h2>
      <ul className="categoryContainer">
        {genres.map((genre) => (
          <li className="styleText" key={genre}>
            <Link
              to={`/?genre=${genre}`}
              className="noTextDecoration styleText"
              onClick={close}
            >
              {genre}
            </Link>
          </li>
        ))}
      </ul>
      <Link className="noTextDecoration styleText allLink" to="/">
        All categories
      </Link>
    </section>
  );
}

export default Category;
