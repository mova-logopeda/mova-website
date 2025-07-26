import React from 'react';
import { useParams,  } from 'react-router-dom';
import { articlesData } from '../../data/ArticlesData';
import './ArticlePage.css';
import Navbar from '../main-page/components/Navbar/Navbar';

const ArticlePage = () => {
  const { id } = useParams();
  const article = articlesData.find((item) => item.id === id);

  if (!article) return <div className="not-found">Artykuł nie znaleziony</div>;

  return (
    <div className="article-page">
      <Navbar />
      <h1 className="article-title">{article.title}</h1>
      <p className="article-date">{article.date}</p>
      <div className="article-content-wrapper">
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="article-image"
          />
        )}
        <div className="article-content">
          {article.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return <p key={index}>{block.text}</p>;
            }
            if (block.type === 'list') {
              return (
                <ul key={index}>
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
