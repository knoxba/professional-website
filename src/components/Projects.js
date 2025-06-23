
import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/project1-image.jpg", // Add your image path
      link: "https://project1-link.com",
      github: "https://github.com/yourusername/project1"
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "/project2-image.jpg", // Add your image path
      link: "https://project2-link.com",
      github: "https://github.com/yourusername/project2"
    },
    {
      title: "Project 3",
      description: "Description of project 3",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "/project2-image.jpg", // Add your image path
      link: "https://project2-link.com",
      github: "https://github.com/yourusername/project2"
    },
    {
      title: "Project 4",
      description: "Description of project 4",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "/project2-image.jpg", // Add your image path
      link: "https://project2-link.com",
      github: "https://github.com/yourusername/project2"
    },
    {
      title: "Project 5",
      description: "Description of project 5",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "/project2-image.jpg", // Add your image path
      link: "https://project2-link.com",
      github: "https://github.com/yourusername/project2"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-card animate-fade-in delay-${index % 4}`}>
            <div className="project-header">
              <div className="title-badge">
                <h3>{project.title}</h3>
              </div>
            </div>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="description-box">
              <p>{project.description}</p>
            </div>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;