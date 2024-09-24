import React from 'react';
import './Projects.css';

// Font Awesome CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

// Project data including title, description, GitHub link, live link, and image
const projects = [
  {
    name: 'Real-time Chat Application Project',
    description: 'A real-time chat application developed using Spring Boot and React',
    githubLink: 'https://github.com/yourusername/ecommerce',
    liveLink: 'https://your-live-demo.com'
  },
  {
    name: 'Financial Analytics Dashboard Project',
    description: 'A financial analytics dashboard with Spring boot and react',
    githubLink: 'https://github.com/yourusername/project-management',
    liveLink: 'https://your-management-app.com'
  },
  {
    name: 'Project Management App',
    description: 'a software application designed to help teams plan, organize, track, and manage their projects and tasks efficiently.',
    githubLink: 'https://github.com/yourusername/project-management',
    liveLink: 'https://your-management-app.com'
  },
  {
    
    name: 'E-commerce Platform development',
    description: 'A responsive e-commerce application using Java and Spring Boot for robust backend services, and React for a dynamic front-end',
     githubLink: 'https://github.com/yourusername/ecommerce',
    liveLink: 'https://your-live-demo.com'
  },
  {
    
    name: 'Healthcare Management System Project',
    description: ' A comprehensive healthcare management system built with Java and Spring Boot for secure back-end functionality, and React for a user-friendly front-end',
    githubLink: 'https://github.com/yourusername/portfolio',
    liveLink: 'https://your-portfolio.com'
  }
];
const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="project-buttons">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-live">
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> View Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;