import {
  DiPython,
  DiReact,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiTensorflow,
  SiScikitlearn,
} from "react-icons/si";
import './Skills.css';
import React from "react";
import GitHubCalendar from "react-github-calendar";

function Skills() {
  return (
    <>
      <section id="skills" className="skills-section">
        <h2>🛠 Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-card" data-aos="fade-up"><DiPython /><p>Python</p></div>
          <div className="skill-card" data-aos="fade-up"><DiReact /><p>React</p></div>
          <div className="skill-card" data-aos="fade-up"><DiHtml5 /><p>HTML5</p></div>
          <div className="skill-card" data-aos="fade-up"><DiCss3 /><p>CSS3</p></div>
          <div className="skill-card" data-aos="fade-up"><SiTensorflow /><p>TensorFlow</p></div>
          <div className="skill-card" data-aos="fade-up"><SiScikitlearn /><p>Scikit-learn</p></div>
        </div>
      </section>

      <div className="github-section">
        <h2 className="github-heading">Days I <span className="highlight">Code</span></h2>
        <GitHubCalendar
          username="Harsha3443" 
          blockSize={15}
          blockMargin={5}
          color="#facc15"
          fontSize={16}
        />
      </div>
    </>
  );
}

export default Skills;
