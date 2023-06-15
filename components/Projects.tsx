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
          "Next.js",
          "React.js",
          "Tailwind.css",
          "NoSql",
          "MongoDB",
          "Typescript",
        ]}
        desc={` Displays useful information about the top crypto coins.
        `}
        githubLink="https://github.com/nsikan-na/CryptoTracker"
        demoLink="https://cryptocoins-tracker.vercel.app/"
        gif="crypto"
      />
      <ProjectTemplate
        title="Charlie Glass"
        skills={["Material Ui", "React.js", "Next.js", "Typescript"]}
        desc={`A website for a company named Charlie Glass.
        `}
        demoLink="https://charlieglassinc.com/"
        gif="charlie"
      />
      <ProjectTemplate
        title="Ramsey Investment Calculator"
        skills={["Tailwind css", "React js", "Next js", "Typescript"]}
        desc={`Calculates the estimated retirement savings of an individual based on user input. A chart is also generated to demonstrate when the user becomes a millionaire.
        `}
        githubLink="https://github.com/nsikan-na/investment_calulator"
        demoLink="https://ramsey-investment-calculator.vercel.app/"
        gif="investment"
      />
      <ProjectTemplate
        title="Gwinnett Diner"
        skills={[
          "Tailwind css",
          "Bootstrap",
          "React.js",
          "Next.js",
          "NoSql",
          "MongoDB",
          "Typescript",
        ]}
        desc={`An eCommerce site for a fictitious restaurant named Gwinnett Diner. I worked on a team of 8 students as a developer to complete this project. The project was made up of 4 sprints, so we met regularly to share how our portion of the application was developing. The capstone project of my associate degree at Gwinnett Technical College.`}
        githubLink="https://github.com/nsikan-na/Gwinnett_Dinner-v2"
        demoLink="https://gwinnett-diner-v2.vercel.app/"
        gif="diner"
      />
      {/* <ProjectTemplate
        title="SMV Calculator (Under Construction)"
        skills={["React js", "Typescript"]}
        desc={`The application is used to calculates your sexual market value as a man.`}
        githubLink="https://github.com/nsikan-na/smvCalc"
        demoLink="https://smv-calc.vercel.app/"
        gif="smv"
        gifNotReady={true}
      /> */}
    </div>
  );
}
