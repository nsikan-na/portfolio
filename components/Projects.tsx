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
          `Capstone Project for my Associate Degree`,
          `Store user data in database using NoSql`,
          `Work on a team of 8 (I was a developer)`,
        ]}
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
          "Context Api",
          "NoSql",
          "MongoDB",
        ]}
        desc={[
          `Responsive interface`,
          `Fetches most data from Coingecko Api`,
          `Uses Quickchart.io for charting data`,
          `Uses Auth0 for authentication`,
          `Manage state using React's context api`,
          `Store user data in NoSql database`,
        ]}
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
    </div>
  );
}
