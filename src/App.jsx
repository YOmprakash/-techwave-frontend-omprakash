import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./components/NewsCard";

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://techwave-ass-backend-om.onrender.com/news")
      .then((response) => {
        console.log(response.data); 
        setArticles(response.data);
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);
  
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="mb-6 text-2xl font-bold text-center">Latest News</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default App;
