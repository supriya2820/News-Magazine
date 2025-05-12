import { useEffect, useState } from "react"
import Newsitem from "./Newsitem";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);
  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(Response=>Response.json()).then(data=>setArticles(data.articles));

  },[category])
  return (
  <div>
    <h2 className="text-center my-4">Latest  <span className="badge bg-danger">News</span></h2>
    <div className="container-fluid px-0">
  <div className="row gx-3 gy-3">
    {articles.map((news, index) => (
      <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
        <Newsitem
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      </div>
    ))}
  </div>
</div>

  </div>
);

}

export default NewsBoard
