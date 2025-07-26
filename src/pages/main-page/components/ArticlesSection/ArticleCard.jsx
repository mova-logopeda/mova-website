import React from 'react';
import './ArticleCard.css';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  const { id, title, shortText, image, date } = article;

  return (
    <div className="article-card">
      <img src={image} alt={title} />
      <div className="article-info">
        <h3>{title}</h3>
        <p>{shortText}</p>
        <span>{date}</span>
        <Link to={`/article/${id}`} className="read-more">Czytaj więcej</Link>
      </div>
    </div>
  );
};


export default ArticleCard;
