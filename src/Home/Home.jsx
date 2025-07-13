import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Home.css"; 
import Type from'./Type'

function Home() {
  return (
    <section className="home-section" id="home">
      <Container className="home-card">
        <Row>
          <Col md={7} className="home-header">
            <h1 className="heading">
              Hi There! <span className="wave">👋🏻</span>
            </h1>
            <h1 className="heading-name">
              I'M <strong className="main-name">Harsha Vardhan Sai</strong>
            </h1>
            <div style={{ padding: 20, textAlign: "left" }}>
              <Type />
            </div>
          </Col>
        </Row>

        <Row className="home-about-content" style={{ marginTop: "50px" }}>
          <Col md={8} className="home-about-description">
            <h1>
              LET ME <span className="highlight"> INTRODUCE </span> MYSELF
            </h1>
            <p>
              I'm passionate about <span className="highlight">AI/ML</span>, full-stack development,
              and creating intuitive digital experiences.
              <br /><br />
              Skilled in <span className="highlight">Python, React, TensorFlow</span> and more.
              <br /><br />
              I'm driven by curiosity and a love for building impactful tech.
            </p>
          </Col>
          <Col md={4} className="home-avatar">
            <Tilt>
              <img src={homeLogo} alt="avatar" className="avatar-img" />
            </Tilt>
          </Col>
        </Row>

        <div className="home-socials">
          <h2>FIND ME ON</h2>
          <p>
            Feel free to <span className="highlight">connect</span> with me
          </p>
          <ul className="social-icons">
            <li><a href="https://github.com/Harsha3443" target="_blank" rel="noreferrer"><AiFillGithub /></a></li>
            <li><a href="https://x.com/harsha34_" target="_blank" rel="noreferrer"><AiOutlineTwitter /></a></li>
            <li><a href="https://www.linkedin.com/in/harsha-vardhan-65a5b62ba" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
            <li><a href="https://instagram.com/YOUR_USERNAME" target="_blank" rel="noreferrer"><AiFillInstagram /></a></li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Home;
