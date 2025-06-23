import React, { useEffect, useState } from 'react';
import './Skills.css';
import './ParallaxShapes.css';

function Skills() {
  const [scrollY, setScrollY] = useState(0);
  
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 80 },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="parallax-shapes">
        <div 
          className="triangle-shape triangle-3"
          style={{
            transform: `translateY(${scrollY * 0.4}px) rotate(60deg)`
          }}
        />
        <div 
          className="triangle-shape triangle-4"
          style={{
            transform: `translateY(${scrollY * -0.3}px) rotate(-45deg)`
          }}
        />
      </div>
      <div className="skills-container">
        <div className="section-header">
          <h2>Technical Skills</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className={`skill-card animate-fade-in delay-${index % 4}`}>
              <div className="skill-header">
                <div className="skill-badge">
                  <h3>{skill.name}</h3>
                </div>
                <div className="skill-percentage">
                  <span>{skill.level}%</span>
                </div>
              </div>
              <div className="skill-bar-container">
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;