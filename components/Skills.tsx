import React from "react";

import Image from "next/image";
import Header from "./Header";
export default function Skills() {
  return (
    <div className="primaryBackground sectionPadding ">
      <Header text="Skills" textColor="white" />
      <div className="md:flex justify-evenly items-center">
        <div className="flex flex-wrap justify-evenly md:w-5/12 lg:w-4/12">
          {[
            "Html",
            "Css",
            "Javascript",
            "React.js",
            "Next.js",
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
            I am software developer focusing on front-end development. Tools I
            commonly use include Html, Css, Bootstrap, Tailwind.css, Javascript,
            React.js, Next.js, and Git/GitHub but most importantly, I am
            confident in my ability to learn and adapt to what my team needs.
          </p>
          <br />
          <p className="indent-12	">
            {`I graduated from Gwinnett Technical College with an associates degree in `}
            <a
              href="https://gwinnetttech.edu/websitedesignanddevelopment/"
              target="_blank"
              className=" underline hover:text-gray-300"
            >
              {`Web Design and Development`}
            </a>
            {`.`}
          </p>
        </div>
      </div>
    </div>
  );
}
