import './About.css';
import myPhoto from './assets/photo.jpg'; // Replace with your image path
import Navbar from './Navbar';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={myPhoto} alt="Harsha Vardhan Sai" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            {String.fromCharCode(8226)}Hi! I'm <strong>Harsha Vardhan Sai</strong>, an AI/ML Developer based in India with a passion for solving problems using intelligent systems.
          </p>
          <p>
            {String.fromCharCode(8226)}I specialize in <strong>Python</strong>, <strong>React.js</strong>, and tools like <strong>TensorFlow</strong> and <strong>Scikit-learn</strong>.
          </p>
          <p>
            {String.fromCharCode(8226)}My focus is on building full-stack apps that solve real-world problems. I’m also continuously learning to deepen my React and backend skills.
          </p>
          <p>
            {String.fromCharCode(8226)}Outside tech, I love <strong>sketching Indian historical legends</strong> and learning <strong>German</strong> 🇩🇪.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
