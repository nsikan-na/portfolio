import React from "react";
import Image from "next/image";
import Header from "./Header";
export default function Skills() {
  return (
    <div className="primaryBackground sectionPadding">
      <Header text="Skills" textColor="white" />
      <div className="md:flex justify-evenly">
        <div className="flex flex-wrap justify-evenly xl:grid xl:grid-cols-3 xl:gap-2 md:w-5/12 lg:w-4/12">
          {[
            "Html",
            "Css",
            "Javascript",
            "React.js",
            "Bootstrap",
            "Tailwind.css",
            "Sql",
            "Git",
            "Node.js",
            "Next.js",
            "MongoDB",
          ].map((skill) => (
            <div key={skill}>
              <Image
                src={`/images/newskills/${skill}.png`}
                alt={`${skill} icon`}
                title={skill}
                width="75%"
                height="75%"
                className="cursor-auto "
              />
            </div>
          ))}
        </div>
        <div className="mt-4 md:w-5/12 text-white font-semibold lg:w-4/12 text-xl">
          <p className="indent-5">
            I am software developer passionate about developing interactive,
            user-friendly websites. I am currently using the JAM stack but more
            importantly I am willing to learn any technology to get the job
            done.
          </p>
          <br />
          <p className="indent-5	">
            I will graduate from{" "}
            <a
              href="https://gwinnetttech.edu/websitedesignanddevelopment/"
              target="_blank"
              className="schoolLink"
            >
              Gwinnett Technical College
            </a>{" "}
            with a degree in Web Design and Development in May 2022.
          </p>
        </div>
      </div>
    </div>
  );
}
