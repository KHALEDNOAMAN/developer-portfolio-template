import React from 'react';
import { portfolioData } from '../config/data';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      <p className="credit">Built with React & Vite</p>
    </footer>
  );
};

export default Footer;
