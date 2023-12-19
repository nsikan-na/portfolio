import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import Header from "./Header";

export default function Projects() {
  return (
    <div
      className="sectionPadding"
      style={{ paddingTop: "5rem", paddingBottom: "8rem" }}
    >
      <Header text="Projects" />
      <div className="text-center primaryText text-xl -mt-3">{`(Click Image to Play/Pause Demo Gif)`}</div>

      <ProjectTemplate
        title="CryptoTracker"
        skills={[
          "Typescript",
          "React.js",
          "Next.js",
          "Tailwind.css",
          "NoSql",
          "MongoDB",
        ]}
        desc={` Displays useful information about the top crypto coins.
        `}
        githubLink="https://github.com/nsikan-na/CryptoTracker"
        demoLink="https://cryptocoins-tracker.vercel.app/"
        gif="crypto"
      />

      <ProjectTemplate
        title="Ramsey Investment Calculator"
        skills={["Typescript", "React.js", "Next.js", "Tailwind.css"]}
        desc={`Calculates the estimated retirement savings of an individual based on user input. A chart is also generated to demonstrate when the user becomes a millionaire.
        `}
        githubLink="https://github.com/nsikan-na/investment_calulator"
        demoLink="https://ramsey-investment-calculator.vercel.app/"
        gif="investment"
      />
      <ProjectTemplate
        title="Gwinnett Diner"
        skills={[
          "Typescript",
          "React.js",
          "Next.js",
          "Tailwind.css",
          "Bootstrap",
          "NoSql",
          "MongoDB",
        ]}
        desc={`An eCommerce site for a fictitious restaurant named Gwinnett Diner. I worked on a team of 8 students as a developer to complete this project. The project was made up of 4 sprints, so we met regularly to share how our portion of the application was developing. The capstone project of my associate degree at Gwinnett Technical College.`}
        githubLink="https://github.com/nsikan-na/Gwinnett_Dinner-v2"
        demoLink="https://gwinnett-diner-v2.vercel.app/"
        gif="diner"
      />
      <ProjectTemplate
        title="Charlie Glass"
        skills={["Typescript", "React.js", "Next.js", "Material Ui"]}
        desc={`A website for a company named Charlie Glass.
          `}
        demoLink="https://charlie-glass.vercel.app/"
        githubLink="https://github.com/nsikan-na/charlie_glass"
        gif="charlie"
        // gifNotReady
      />
    </div>
  );
}
