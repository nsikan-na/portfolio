import React from "react";
import Image from "next/image";
import Header from "./Header";
export default function Skills() {
  return (
    <div className="primaryBackground sectionPadding">
      <Header text="Skills" textColor="white" />
      <div className="md:flex justify-evenly">
        <div className="grid grid-cols-3 gap-2 md:w-5/12  flex-wrap justify-evenly lg:w-4/12">
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
                width="90%"
                height="90%"
                className="cursor-auto "
              />
            </div>
          ))}
        </div>
        <div className="mt-4 md:w-5/12 text-white font-semibold lg:w-4/12 text-xl">
          <p className='indent-5'>
            {`I am software developer passionate about developing interactive, user-friendly websites. I am currently using the JAM stack but more willingly I am willing to learn any technology to get the job done.`}
          </p>
          <br />
          <p className='indent-5	'>
            {` I will graduate from Gwinnett Technical College with a degree in Web Design and Development in May 2022. From this course, I've learn about developing and deploying full stack applications. `}
          </p>
        </div>
      </div>
    </div>
  );
}
