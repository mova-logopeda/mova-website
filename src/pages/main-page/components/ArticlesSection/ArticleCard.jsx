import React from 'react';
import { Link } from 'react-router-dom';

import './ArticleCard.css';


const ArticleCard = ({ article }) => {
  const { id, title, shortText, image, date } = article;

  return (
    <div className="article-card" data-aos="fade-up" >
      <img src={image} alt={title} />
      <div className="article-info">
        <div className="article-top">
          <h3>{title}</h3>
          <p>{shortText}</p>
        </div>
        <div className="article-bottom">
          <span>{date}</span>
          <Link to={`/article/${id}`} className="read-more">
            Czytaj więcej
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
