import React from "react";
import Image from "next/image";
import Header from "./Header";
export default function Skills() {
  return (
    <div className="primaryBackground sectionPadding">
      <Header text="Skills" textColor="white" />
      <div className="flex justify-evenly">
        <div className="grid grid-cols-4 gap-4 w-5/12">
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
            <div
              key={skill}
              title={skill}
              className="bg-gray-100 pt-3 px-4 rounded-full"
            >
              <Image
                src={`/images/skills/${skill}.png`}
                alt={`${skill} icon`}
                width="40%"
                height="40%"
                className="cursor-auto"
              />
            </div>
          ))}
        </div>
        <div className="w-5/12 text-white font-semibold">
          <p>
            {`
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.`}
          </p>
          <br />
          <p>
            {`
          Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.`}
          </p>
        </div>
      </div>
    </div>
  );
}
