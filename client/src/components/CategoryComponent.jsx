import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CategoryComponent.css";
import "../App.css";

function Category() {
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
      <h2 className="styleTitleH2">GENRES</h2>
      <ul className="categoryContainer">
        {genres.map((genre) => (
          <li className="styleText" key={genre}>{genre}</li>
        ))}
      </ul>
      <Link className="noTextDecoration styleText" to="/">
        Toutes les catégories
      </Link>
    </section>
  );
}

export default Category;
