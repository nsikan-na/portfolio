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
          {[
            "Html",
            "Css",
            "Javascript",
            "React.js",
            "Typescript",
            // "Next.js",
            "Git",
          ].map((skill: string) => (
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
          <p className="indent-12">
            I am a software developer focusing on web development. Technologies
            I use include Html, Css, Javascript, Typescript, React, Redux,
            Node.js, Next.js, Docker, Git, Java, Sql, NoSql, MongoDB, Postgres,
            Photoshop, Tailwind.css, and various Css Frameworks. Most
            importantly, I can adapt to the needs of my team.
          </p>
          <br />
          <p className="indent-12	">
            {`I have an A.A.S. in Web Design and Development and will graduate with a B.S. in Computer Science.`}
          </p>
        </div>
      </div>
    </div>
  );
}
