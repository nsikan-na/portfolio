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
        desc={`This is an application that takes displays useful information about the top crypto coins. It also includes many common features that add to the user experience.`}
        githubLink="https://github.com/nsikan-na/CryptoTracker"
        demoLink="https://cryptocoins-tracker.vercel.app/"
        gif="crypto"
      />
      <ProjectTemplate
        title="Charlie Glass"
        skills={["Material Ui", "React.js", "Next.js", "Typescript"]}
        desc={`This is a business website I made for a company name Charlie Glass.`}
        demoLink="https://charlieglassinc.com/"
        gif="charlie"
      />
      <ProjectTemplate
        title="Ramsey Investment Calculator"
        skills={["Tailwind css", "React js", "Next js", "Typescript"]}
        desc={`This is an application that calculates the estimated retirement savings of an individual based on user input. A chart
  is also generated to demonstrate when the user becomes a millionaire.`}
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
        desc={`This was the capstone project of my associate's degree at Gwinnett Technical College. It is an eCommerce
        site for a fictitious restaurant name Gwinnett Diner. I worked on a team of 8 students as a developer to complete this project. The project was
        made up of 4 sprints, so we met regularly to share how our portion of the application was developing.`}
        githubLink="https://github.com/nsikan-na/Gwinnett_Dinner-v2"
        demoLink="https://gwinnett-diner-v2.vercel.app/"
        gif="diner"
      />
      <ProjectTemplate
        title="SMV Calculator (Under Construction)"
        skills={["React js", "Typescript"]}
        desc={`The application is used to calculates your sexual market value as a man.`}
        githubLink="https://github.com/nsikan-na/smvCalc"
        demoLink="https://smv-calc.vercel.app/"
        gif="smv"
        gifNotReady={true}
      />
    </div>
  );
}
