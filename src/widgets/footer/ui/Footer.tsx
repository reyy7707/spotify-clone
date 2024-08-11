import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-list">
            <li><a href="https://t.me/diigmt" target="_blank" rel="noopener noreferrer">Telegram: diigmt</a></li>
            <li><a href="https://instagram.com/_amantur.jumaliev" target="_blank" rel="noopener noreferrer">Instagram: _amantur.jumaliev</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <p>&copy; {new Date().getFullYear()} Spotify Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
