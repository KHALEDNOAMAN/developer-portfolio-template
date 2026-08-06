import React from 'react';
import { portfolioData } from '../config/data';
import ScrollReveal from './ScrollReveal';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section experience">
      <ScrollReveal>
        <h2 className="section-title">Experience</h2>
      </ScrollReveal>
      <div className="timeline">
        {portfolioData.experience.map((job, index) => (
          <ScrollReveal key={index} className="timeline-item">
            <div className="timeline-content glass-card">
              <span className="dates">{job.dates}</span>
              <h3>{job.role}</h3>
              <h4>{job.company}</h4>
              <p>{job.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
