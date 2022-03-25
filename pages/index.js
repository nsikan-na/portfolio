import React, { useContext } from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { Context } from "../context";
import changeColor from "../util/changeColor";
export default function index() {
  const { showChangeTheme } = useContext(Context);
  changeColor("rgb(0, 209, 181)");
  // changeColor("");
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
