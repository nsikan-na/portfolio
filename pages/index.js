import React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
export default function index() {
  //linear-gradient(to right, #08EABE , #08EABE)
  return (
    <div>
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
