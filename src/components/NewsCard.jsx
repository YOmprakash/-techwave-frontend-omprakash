import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
      <img
        src={article.image}
        alt={article.title}
          loading="lazy"
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-semibold">{article.title}</h2>
        <p className="mb-4 text-sm text-gray-600">{article.description}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-500 hover:underline"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
