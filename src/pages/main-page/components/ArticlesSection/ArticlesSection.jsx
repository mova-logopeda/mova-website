import React, { useState } from 'react';
import { articlesData } from '../../../../data/ArticlesData';
import ArticleCard from './ArticleCard';
import './ArticlesSection.css';

const ArticlesSection = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleArticles = articlesData.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <section className="articles-section" id="articles">
      <h2 className="articles-heading">Dla rodzica</h2>
      <div className="articles-list">
        {visibleArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      {visibleCount < articlesData.length && (
        <button className="load-more" onClick={loadMore}>
          Zobacz więcej
        </button>
      )}
    </section>
  );
};

export default ArticlesSection;
