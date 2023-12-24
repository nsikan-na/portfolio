import React from "react";

import Image from "next/image";
import Header from "./Header";
export default function Skills() {
  return (
    <div
      className="primaryBackground sectionPadding "
      style={{ paddingTop: "5rem", paddingBottom: "8rem" }}
    >
      <Header text="Skills" textColor="white" />
      <div className="md:flex justify-evenly items-center">
        <div className="flex flex-wrap justify-evenly md:w-5/12 lg:w-4/12">
          {["Html", "Css", "Javascript", "React.js", "Typescript", "Git", "Sql"].map(
            (skill: string) => (
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
            )
          )}
        </div>
        <div className="mt-4 md:w-5/12 text-white font-semibold lg:w-4/12 text-xl">
          <p className="indent-12">
            I am a software developer focusing on web development. Technologies
            I am focusing on include Html, Css, Javascript, Typescript, React.js, Node.js,
            Docker, Git, Java, and Sql. Most importantly, I can adapt to the
            needs of my team.
          </p>
        </div>
      </div>
    </div>
  );
}
