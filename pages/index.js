import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
export default function index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <h3>About</h3>
      <About />
      <h3>Skills</h3>
      <Skills />
      <h3>Projects</h3>
      <Projects />
      <h3>Contact Me</h3>
      <Contact />
      <Footer />
    </div>
  );
}
