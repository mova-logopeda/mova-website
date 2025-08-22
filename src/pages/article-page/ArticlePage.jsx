import './ArticlePage.css';
import { articlesData } from 'data/ArticlesData';
import { useParams } from 'react-router-dom';
import Footer from 'components/footer/Footer.jsx';
import Navbar from 'components/Navbar/Navbar.jsx';
import React from 'react';

const ArticlePage = () => {
  const { id } = useParams();
  const article = articlesData.find((item) => item.id === id);

  if (!article) return <div className="not-found">Artykuł nie znaleziony</div>;

  return (
    <div className="article-page">
      <Navbar />
      <div className="article-main">
        {article.image && (
          <div className="article-image-wrapper">
            <img
              src={article.image}
              alt={article.title}
              className="article-image"
            />
          </div>
        )}
        <div className="article-text" >
          <header className="article-header">
          <h1 className="article-title">{article.title}</h1>
          
          </header>
          <div className="article-content-wrapper">
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
          <p className="article-date">{article.date}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArticlePage;
