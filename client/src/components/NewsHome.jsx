import { useState, useEffect } from "react";
import axios from "axios";
import "./NewsHome.css";

function NewsCard() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          "https://newsapi.org/v2/everything/?domains=begeek.fr&language=fr&apiKey=a957ae1f88df4d6885bd3de972fb6ebf"
        )
        .then((response) => {
          setArticles(response.data.articles);
        });
    };
    fetchData();
  }, []);

  return (
    <section>
      <div className="news-section">
        <h2>Actualités des Jeux Vidéo</h2>
        {articles.slice(0, 3).map((article) => (
          <a href={article.url} key={article.url} className="news-link">
            <div className="news-item">
              <h3>{article.title}</h3>
              <img src={article.urlToImage} alt="PhotoDeL'Article" />
              <p>{article.author}</p>
              <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
              <p>{article.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default NewsCard;
