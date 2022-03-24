import React from "react";
import ProjectTemplate from "./ProjectTemplate.js";
import Header from "../components/Header";

export default function Projects() {
  return (
    <div className="sectionPadding">
      <Header text="Projects" />

      <ProjectTemplate
        title="Ramsey Investment Calulator"
        skills={[
          "Tailwind css",
          "React js",
          "Next js",
          "Context Api",
          "Quick Chart Api",
        ]}
        desc="This is a clone of an investment calculator I use often (Ramsey Solution Investment Calculator). This is a clone of an investment calculator I use often (Ramsey Solution Investment Calculator)."
        githubLink="https://github.com/nsikan-na/investment_calulator"
        demoLink="https://ramsey-investment-calculator.vercel.app/"
        gif='investment'
      />
      <ProjectTemplate
        title="Gwinnett Diner"
        skills={[
          "Tailwind css",
          "React.js",
          "React Bootstrap",
          "Next.js",
          "Context Api",
        ]}
        desc="This is an e-commerce for a company named Gwinnett Diner. This is an e-commerce for a company named Gwinnett Diner."
        githubLink="https://github.com/nsikan-na/Gwinnett_Dinner-v2"
        demoLink="https://gwinnett-diner-v2.vercel.app/"
       gif='diner'
      />
    </div>
  );
}
