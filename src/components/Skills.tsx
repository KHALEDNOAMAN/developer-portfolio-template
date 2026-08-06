import React from 'react';
import { portfolioData } from '../config/data';
import ScrollReveal from './ScrollReveal';
import './Skills.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section skills">
      <ScrollReveal>
        <h2 className="section-title">Skills</h2>
      </ScrollReveal>
      <div className="skills-grid">
        {portfolioData.skills.map((skillGroup, index) => (
          <ScrollReveal key={index} className="glass-card skill-card">
            <h3>{skillGroup.category}</h3>
            <ul className="skill-list">
              {skillGroup.items.map((item, idx) => (
                <li key={idx} className="skill-item">
                  <span className="bullet">▹</span> {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
