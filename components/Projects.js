import React from "react";
import ProjectTemplate from "./ProjectTemplate.js";
export default function Projects() {
  return (
    <div>
      <ProjectTemplate
        title="Ramsey Investment Calulator"
        skills={[
          "Html",
          "Css",
          "Tailwind css",
          "Javascript",
          "React js",
          "Next js",
          "Context Api",
          "Responsive Design",
          "Server-side Validation",
          "Quick Chart Api",
        ]}
        desc="This is a clone of an investment calculator I use often (Ramsey Solution Investment Calculator)."
        githubLink="https://github.com/nsikan-na/investment_calulator"
        demoLink="https://ramsey-investment-calculator.vercel.app/"
        video="XRy9F8eoCM0"
      />
      <ProjectTemplate
        title="Gwinnett Diner"
        skills={[
          "Html",
          "Css",
          "Tailwind css",
          "Javascript",
          "React.js",
          "React Bootstrap",
          "Next.js",
          "Context Api",
          "Responsive Design",
          "Server-side Validation",
          "Reuseable Components",
          "Dynamic Routing",
          "User Authentication",
        ]}
        desc="This is an e-commerce for a company named Gwinnett Diner. "
        githubLink="https://github.com/nsikan-na/Gwinnett_Dinner-v2"
        demoLink="https://gwinnett-diner-v2.vercel.app/"
        video="wZVcoJX6_Fk"
      />
    </div>
  );
}
