import React, { useContext } from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { Context } from "../context";
import changeColor from "../util/changeColor";
import Alert from "../components/Alert";
export default function index() {
  const {} = useContext(Context);
  changeColor("#AE00FF");
  return (
    <div>
      <Alert />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
