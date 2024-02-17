import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Alert from "./components/Alert";
export default function index() {
  return (
    <>
      <Alert />
      <Hero />
      <Skills />
      <Projects />
    </>
  );
}
