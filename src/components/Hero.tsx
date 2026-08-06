import React from 'react';
import { portfolioData } from '../config/data';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="greeting">Hi, my name is</p>
        <h1 className="name">{portfolioData.name}.</h1>
        <h2 className="title gradient-text">{portfolioData.title}.</h2>
        <p className="bio">{portfolioData.bio}</p>
        <div className="hero-btns">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
    </section>
  );
};

export default Hero;
