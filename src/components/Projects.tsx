import React from 'react';
import { portfolioData } from '../config/data';
import ScrollReveal from './ScrollReveal';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section projects">
      <ScrollReveal>
        <h2 className="section-title">Featured Projects</h2>
      </ScrollReveal>
      <div className="projects-grid">
        {portfolioData.projects.map((project, index) => (
          <ScrollReveal key={index} className="glass-card project-card">
            <div className="project-img">
              <img src={project.image} alt={project.title} />
              <div className="project-links-overlay">
                <a href={project.github} target="_blank" rel="noopener noreferrer"><FiGithub /></a>
                <a href={project.live} target="_blank" rel="noopener noreferrer"><FiExternalLink /></a>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
