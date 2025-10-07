import React from 'react';
import './footer.css';

function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: ["E-commerce Development", "Business Websites", "Web Applications", "Landing Pages"]
    },
    {
      title: "For Clients",
      links: ["How It Works", "Pricing", "Portfolio", "FAQ"]
    },
    {
      title: "For Developers",
      links: ["Join Our Network", "Developer Benefits", "Requirements", "Apply Now"]
    },
    {
      title: "Company",
      links: ["About Us", "Contact", "Privacy Policy", "Terms of Service"]
    }
  ];

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {footerSections.map((section, index) => (
            <div key={index} className="footer-column">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 ShopBuilder. Connecting entrepreneurs with expert developers.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
