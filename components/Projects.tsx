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
        desc={`This is an e-commerce site for a restaurant called Gwinnett Diner that has something for everyone. This was the capstone project for my Associates Degrees. I was a developer on a team of 8 students, 3 designers, 3 developers, and 2 testers.`}
        githubLink="https://github.com/nsikan-na/Gwinnett_Dinner-v2"
        demoLink="https://gwinnett-diner-v2.vercel.app/"
        gif="diner"
      />{" "}
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
        desc={`This is an application for quickly getting information on a top 50 crypto coins. The data comes from the Coingecko api and uses Quickchart.io api for charting data. Lastly, the application uses Auth0 for authentication.`}
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
        desc={` The application is used to calculate the amount of money the user would have based off of validated input they enter. It uses the QuickChart.io for charting data. This is a clone of the Ramsey Solution calculator.`}
        githubLink="https://github.com/nsikan-na/investment_calulator"
        demoLink="https://ramsey-investment-calculator.vercel.app/"
        gif="investment"
      />
    </div>
  );
}
