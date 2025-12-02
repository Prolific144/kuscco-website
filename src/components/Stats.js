import React, { useState, useEffect, useRef } from 'react';
import { FaUsers, FaHandshake, FaChartLine, FaBuilding } from 'react-icons/fa';
import '../styles/Stats.css';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { 
      icon: <FaUsers />, 
      value: 5000, 
      label: 'Member Cooperatives',
      suffix: '+'
    },
    { 
      icon: <FaHandshake />, 
      value: 10, 
      label: 'Million Members',
      suffix: 'M+'
    },
    { 
      icon: <FaChartLine />, 
      value: 200, 
      label: 'Billion Assets',
      suffix: 'B+'
    },
    { 
      icon: <FaBuilding />, 
      value: 47, 
      label: 'Years of Service',
      suffix: '+'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={statsRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatItem 
              key={index}
              stat={stat}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ stat, index, isVisible }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // 2 seconds
  const increment = stat.value / (duration / 16); // 60fps

  useEffect(() => {
    if (!isVisible) return;

    let start = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const currentCount = Math.min(stat.value, Math.floor((progress / duration) * stat.value));
      
      setCount(currentCount);

      if (progress < duration && currentCount < stat.value) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(stat.value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, stat.value]);

  return (
    <div 
      className="stat-item"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="stat-icon">{stat.icon}</div>
      <div className="stat-content">
        <span className="stat-number">
          {count.toLocaleString()}{stat.suffix}
        </span>
        <span className="stat-label">{stat.label}</span>
      </div>
    </div>
  );
};

export default Stats;