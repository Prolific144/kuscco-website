import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/News.css';

const News = () => {
  const newsItems = [
    {
      date: 'June 15, 2023',
      title: 'KUSCCO Annual SACCO Leaders Conference 2023',
      description: 'The conference brings together SACCO leaders from across the country to discuss emerging trends and challenges in the cooperative sector.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: '/news/annual-conference-2023'
    },
    {
      date: 'May 28, 2023',
      title: 'Digital Transformation Workshop for SACCOs',
      description: 'KUSCCO organizes a capacity building workshop to help SACCOs embrace digital solutions for enhanced service delivery.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: '/news/digital-transformation-workshop'
    },
    {
      date: 'April 12, 2023',
      title: 'KUSCCO Partners with FSD Kenya on Financial Inclusion',
      description: 'A new partnership aims to expand financial inclusion through innovative SACCO products targeting underserved communities.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: '/news/partnership-fsd-kenya'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>Latest News & Events</h2>
          <p>Stay updated with the latest developments, events, and announcements from KUSCCO and the cooperative movement.</p>
        </div>
        
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <div key={index} className="news-card">
              <div className="news-img">
                <img 
                  src={item.image} 
                  alt={item.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/600x400/0a3d62/ffffff?text=' + encodeURIComponent(item.title);
                  }}
                />
              </div>
              <div className="news-content">
                <span className="news-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to={item.link} className="news-link">
                  Read More <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;