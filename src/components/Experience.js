import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      company: "Amazon",
      position: "Support Engineer 3",
      duration: "Duration",
      description: "Job description..."
    },
    {
      company: "Amazon",
      position: "Support Engineer 2",
      duration: "Duration",
      description: "Job description..."
    },
    {
      company: "Amazon",
      position: "Support Engineer 1",
      duration: "Duration",
      description: "Job description..."
    },
    {
      company: "Amazon",
      position: "Maintenance Technician 2",
      duration: "Duration",
      description: "Job description..."
    },
    // Add more experiences
  ];

  return (
    <section id="experience" className="experience">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className={`experience-item animate-fade-in delay-${index}`}>
            <div className="experience-header">
              <div className="position-badge">
                <h3>{exp.position}</h3>
              </div>
              <div className="company-info">
                <h4>{exp.company}</h4>
                <p className="duration">{exp.duration}</p>
              </div>
            </div>
            <div className="description-box">
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;