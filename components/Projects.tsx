import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import Header from "./Header";

export default function Projects() {
  return (
    <div className="sectionPadding">
      <Header text="Projects" />

      <ProjectTemplate
        title="Ramsey Investment Calculator"
        skills={[
          "Tailwind css",
          "Typescript",
          "React js",
          "Next js",
          "Context Api",
          "Quick Chart Api",
        ]}
        desc={[
          "Responsive interface",
          "Turn a psd into a website",
          `Manage state using React's context api`,
          "Validate user input",
          "Consume charting api (QuickChart.io) asynchronously based off user input.",
        ]}
        githubLink="https://github.com/nsikan-na/investment_calulator"
        demoLink="https://ramsey-investment-calculator.vercel.app/"
        gif="investment"
      />
      <ProjectTemplate
        title="Gwinnett Diner"
        skills={[
          "Tailwind css",
          "Bootstrap",
          "Typescript",
          "React.js",
          "Next.js",
          "Context Api",
          "Bcrypt",
          "NoSql",
          "MongoDB",
        ]}
        desc={[
          `Responsive interface`,
          `Manage state using React's context api`,
          `Validate user input`,
          `Encrypt sensitive data using bcrypt`,
          `Store user data in database using NoSql`,
          `Work on a team (I was a developer)`,
        ]}
        githubLink="https://github.com/nsikan-na/Gwinnett_Dinner-v2"
        demoLink="https://gwinnett-diner-v2.vercel.app/"
        gif="diner"
      />
    </div>
  );
}
