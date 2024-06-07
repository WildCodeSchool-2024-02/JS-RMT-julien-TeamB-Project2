import { useState, useEffect } from "react";
import axios from "axios";
import "./NewsHome.css";

function NewsCard() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          `https://newsapi.org/v2/everything/?q=gaming&language=en&apiKey=${import.meta.env.VITE_API_NEWS_KEY}`
        )
        .then((response) => {
          const allArticles = response.data.articles;
          const filteredArticles = allArticles.filter(
            (article) => article.urlToImage
          );
          const shuffledArticles = filteredArticles.sort(
            () => 0.5 - Math.random()
          );
          const selectedArticles = shuffledArticles.slice(0, 6);
          setArticles(selectedArticles);
        });
    };
    fetchData();
  }, []);

  return (
    <section>
      <div className="newsSection">
        <h2 className="newsSectionTitle">Daily News</h2>
        <div className="newsCard">
          {articles.map((article) => (
            <a
              href={article.url}
              key={article.url}
              className="newsLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="newsItem">
                <h3>{article.title}</h3>
                <img src={article.urlToImage} alt={article.title} />
                <p>{article.description.substring(0, 150)}...</p>
                <p>
                  {article.author}
                  {" . . . . . "}
                  {new Date(article.publishedAt).toLocaleDateString()}
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
