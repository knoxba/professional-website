import React, { useEffect, useState } from 'react';
import './About.css';
import './ParallaxShapes.css';
import { motion } from 'framer-motion';

function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="about">
      <div className="parallax-shapes">
        <div 
          className="triangle-shape triangle-1"
          style={{
            transform: `translateY(${scrollY * 0.3}px) rotate(45deg)`
          }}
        />
        <div 
          className="triangle-shape triangle-2"
          style={{
            transform: `translateY(${scrollY * -0.2}px) rotate(-30deg)`
          }}
        />
      </div>
      <div className="about-container">
        <div className="section-header">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-card animate-fade-in delay-0">
            <div className="card-header">
              <div className="title-badge">
                <h3>Professional Background</h3>
              </div>
            </div>
            <div className="description-box">
              <p>Experienced Support Engineer III with a passion for solving complex technical challenges and delivering exceptional customer experiences. Skilled in methodical problem-solving and engineering best practices.</p>
            </div>
          </div>
          <div className="about-card animate-fade-in delay-1">
            <div className="card-header">
              <div className="title-badge">
                <h3>Technical Expertise</h3>
              </div>
            </div>
            <div className="description-box">
              <p>Proficient in troubleshooting, system analysis, and customer support. Strong background in engineering methodologies and technical documentation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;