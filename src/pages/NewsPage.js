import React from 'react';
import '../styles/Page.css';

const NewsPage = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'KUSCCO Annual SACCO Leaders Conference 2023',
      date: 'June 15, 2023',
      excerpt: 'The conference brings together SACCO leaders from across the country to discuss emerging trends and challenges in the cooperative sector.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'Digital Transformation Workshop for SACCOs',
      date: 'May 28, 2023',
      excerpt: 'KUSCCO organizes a capacity building workshop to help SACCOs embrace digital solutions for enhanced service delivery.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'KUSCCO Partners with FSD Kenya on Financial Inclusion',
      date: 'April 12, 2023',
      excerpt: 'A new partnership aims to expand financial inclusion through innovative SACCO products targeting underserved communities.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="page-container">
      <div className="page-hero">
        <div className="container">
          <h1>News & Events</h1>
          <p>Latest updates from KUSCCO and the cooperative movement</p>
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="news-page-grid">
            {newsArticles.map(article => (
              <div key={article.id} className="news-page-card">
                <div className="news-page-img">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/600x400/0a3d62/ffffff?text=${encodeURIComponent(article.title)}`;
                    }}
                  />
                </div>
                <div className="news-page-content">
                  <span className="news-page-date">{article.date}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <button className="btn btn-secondary">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;