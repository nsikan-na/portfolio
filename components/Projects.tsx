import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import Header from "./Header";

export default function Projects() {
  return (
    <div className="sectionPadding">
      <Header text="Projects" />
      <div className="text-center primaryText text-xl -mt-3">{`(Click Image to Play/Pause Demo Gif)`}</div>
      <ProjectTemplate
        title="Gwinnett Diner"
        skills={[
          "Tailwind css",
          "Bootstrap",
          "React.js",
          "Next.js",
          "NoSql",
          "MongoDB",
        ]}
        desc={`This was the capstone project of my associate's degree at Gwinnett Technical College. It is an eCommerce
        site for a fictitious restaurant name Gwinnett Diner. I worked on a team of 8 students as a developer to complete this project. The project was
        made up of 4 sprints, so we met regularly to share how our portion of the application was developing.`}
        githubLink="https://github.com/nsikan-na/Gwinnett_Dinner-v2"
        demoLink="https://gwinnett-diner-v2.vercel.app/"
        gif="diner"
      />
      <ProjectTemplate
        title="CryptoTracker"
        skills={[
          "Next.js",
          "React.js",
          "Tailwind.css",
          "NoSql",
          "MongoDB",
        ]}
        desc={`This is an application that takes displays useful information about the top crypto coins. It also includes many common features that add to the user experience.`}
        githubLink="https://github.com/nsikan-na/CryptoTracker"
        demoLink="https://cryptocoins-tracker.vercel.app/"
        gif="crypto"
      />
      <ProjectTemplate
        title="Ramsey Investment Calculator"
        skills={[
          "Tailwind css",
          "React js",
          "Next js",
        ]}
        desc={`This is an application that calculates the estimated retirement savings of an individual based on user input. A chart
        is also generated to demonstrate when the user becomes a millionaire.`}
        githubLink="https://github.com/nsikan-na/investment_calulator"
        demoLink="https://ramsey-investment-calculator.vercel.app/"
        gif="investment"
      />
    </div>
  );
}
