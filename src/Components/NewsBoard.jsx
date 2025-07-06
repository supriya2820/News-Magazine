import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false); // optional

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.status !== "ok") throw new Error("API error");

        setArticles(data.articles || []);
      } catch (err) {
        console.error("Failed to fetch news:", err);
        setArticles([]);  // fallback to empty list
        setError(true);    // optional, for UI
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <h2 className="text-center my-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      <div className="container-fluid px-0">
        <div className="row gx-3 gy-3">
          {articles?.length > 0 ? (
            articles.map((news, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <Newsitem
                  title={news.title}
                  description={news.description}
                  src={news.urlToImage}
                  url={news.url}
                />
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No news available or API error.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsBoard;
