import React from 'react';
import { portfolioData } from '../config/data';
import ScrollReveal from './ScrollReveal';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section about">
      <ScrollReveal>
        <h2 className="section-title">About Me</h2>
      </ScrollReveal>
      
      <div className="about-content">
        <ScrollReveal className="about-text">
          <p>{portfolioData.bio}</p>
          <div className="stats">
            <div className="stat-item">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Commits this year</p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal className="about-image">
          <div className="image-wrapper">
            <div className="image-placeholder">
              <span>{portfolioData.name.charAt(0)}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
