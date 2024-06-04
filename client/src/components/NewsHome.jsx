import { useState, useEffect } from "react";
import axios from "axios";
import "./NewsHome.css";

function NewsCard() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          "https://newsapi.org/v2/everything/?q=gaming&language=fr&apiKey=a957ae1f88df4d6885bd3de972fb6ebf"
        )
        .then((response) => {
          const allArticles = response.data.articles;
          const shuffledArticles = allArticles.sort(() => 0.5 - Math.random());
          const selectedArticles = shuffledArticles.slice(0, 6);
          setArticles(selectedArticles);
        });
    };
    fetchData();
  }, []);

  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section>
      <div className="newsSection">
        <h2>Actualités des Jeux Vidéo</h2>
        <div className="newsCard">
          {articles.map((article) => (
            <a href={article.url} key={article.url} className="newsLink">
              <div className="newsItem">
                <h3>{article.title}</h3>
                <img src={article.urlToImage} alt="PhotoDeL'Article" />
                <p>{article.author}</p>
                <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
                <p>
                  {expanded[0]
                    ? article.description
                    : `${article.description.substring(0, 50)}...`}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleExpand();
                    }}
                  >
                    {expanded[50] ? "Moins" : "Plus"}
                  </button>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsCard;
