import React from "react";
import "./Projects.css";

const projectData = [
  {
    title: "AI Chatbot",
    description: "An AI-powered chatbot using NLP and React.",
    // image: "/assets/projects/chatbot.png",
    // video: "",
    // readme: "https://github.com/yourusername/ai-chatbot",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Vite.",
    // image: "/assets/projects/portfolio.png",
    // video: "",
    // readme: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Object Detection",
    description: "A real-time object detection using TensorFlow.",
    // image: "",
    // video: "/assets/projects/detection-demo.mp4",
    // readme: "https://github.com/yourusername/object-detection",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>🚀 Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, idx) => (
          <div className="project-card" key={idx}>
            {/* {project.image && (
              <img src={project.image} alt={project.title} className="project-img" />
            )} */}
            {/* {project.video && (
              <video className="project-video" controls>
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )} */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {/* {project.readme && (
              <a
                href={project.readme}
                className="readme-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 View Code / Readme
              </a>
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
