import React, { useState } from "react";
import Navbar from './Navbar';
import Home from './Home/Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import './App.css';
import ToggleSwitch from "./Contacts";
import Contact from "./Contacts";

function App() {
  const [someState, setSomeState] = useState(false);

  const handleToggle = () => {
    setSomeState(prev => !prev);
  };

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </>
  );
}

export default App;
