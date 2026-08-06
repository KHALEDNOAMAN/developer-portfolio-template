import React from 'react';
import { portfolioData } from '../config/data';
import ScrollReveal from './ScrollReveal';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section contact">
      <ScrollReveal>
        <h2 className="section-title">Get In Touch</h2>
      </ScrollReveal>
      <ScrollReveal className="contact-content">
        <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        <a href={`mailto:${portfolioData.email}`} className="btn btn-primary contact-btn">Say Hello</a>
        <div className="social-links-contact">
          <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer"><FiGithub size={24} /></a>
          <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer"><FiLinkedin size={24} /></a>
          <a href={portfolioData.socials.twitter} target="_blank" rel="noopener noreferrer"><FiTwitter size={24} /></a>
          <a href={`mailto:${portfolioData.email}`}><FiMail size={24} /></a>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Contact;
