import React from 'react';
import '../styles/Partners.css';

const Partners = () => {
  const partners = [
    {
      name: 'WOCCU',
      logo: 'https://www.woccu.org/images/default-source/default-album/woccu-logox200.png',
      url: 'https://www.woccu.org'
    },
    {
      name: 'ACCOSCA',
      logo: 'https://accosca.org/wp-content/uploads/2021/06/ACOSCA-LOGO-1.png',
      url: 'https://accosca.org'
    },
    {
      name: 'FSD Kenya',
      logo: 'https://www.fsdkenya.org/wp-content/uploads/2019/02/fsd-kenya-logo.png',
      url: 'https://www.fsdkenya.org'
    },
    {
      name: 'IHRM',
      logo: 'https://www.ihrm.or.ke/wp-content/uploads/2021/06/ihrm-logo.png',
      url: 'https://www.ihrm.or.ke'
    },
    {
      name: 'Cornerstone League',
      logo: 'https://www.cornerstoneleague.coop/sites/default/files/2020-06/cornerstone-league-logo.png',
      url: 'https://www.cornerstoneleague.coop'
    }
  ];

  return (
    <section className="section partners">
      <div className="container">
        <div className="section-title">
          <h2>Our Partners</h2>
          <p>We collaborate with leading organizations to strengthen the cooperative movement in Kenya and beyond.</p>
        </div>
        
        <div className="partners-slider">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo">
              <a href={partner.url} target="_blank" rel="noopener noreferrer">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/150x100/0a3d62/ffffff?text=${encodeURIComponent(partner.name)}`;
                  }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;