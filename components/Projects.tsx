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
          "Typescript",
          "React.js",
          "Next.js",
          "Bcrypt",
          "NoSql",
          "MongoDB",
        ]}
        desc={`This was the capstone project of my associate's degree at Gwinnett Technical College. It is an eCommerce
        site for a fictitious restaurant name Gwinnett Diner. I worked with 8 other students to get the application done.
        I was a developer alongside 2 other students. Other titles included testers and designers. The project was
        made up of 4 sprints. We met regularly to share how our portion of the application was developing.`}
        githubLink="https://github.com/nsikan-na/Gwinnett_Dinner-v2"
        demoLink="https://gwinnett-diner-v2.vercel.app/"
        gif="diner"
      />
      <ProjectTemplate
        title="CryptoTracker"
        skills={[
          "Next.js",
          "Typescript",
          "React.js",
          "Tailwind.css",
          "NoSql",
          "MongoDB",
          "QuickChart.io Api",
          "Auth0 Api",
          "Coingecko Api",
        ]}
        desc={`This is an application that takes data from the Coingecko API and uses the QuickChart.io API to display a dynamic
        graph that changes as the data changes. It also includes many common features so brings the app to the next
        level.`}
        githubLink="https://github.com/nsikan-na/CryptoTracker"
        demoLink="https://cryptocoins-tracker.vercel.app/"
        gif="crypto"
      />
      <ProjectTemplate
        title="Ramsey Investment Calculator"
        skills={[
          "Tailwind css",
          "Typescript",
          "React js",
          "Next js",
          "QuickChart.io Api",
        ]}
        desc={`This is an application that calculates the estimated retirement savings of an individual based on user input. A chart
        is also generated dynamically using the QuickChart.io API to demonstrate when the user becomes a millionaire.`}
        githubLink="https://github.com/nsikan-na/investment_calulator"
        demoLink="https://ramsey-investment-calculator.vercel.app/"
        gif="investment"
      />
    </div>
  );
}
