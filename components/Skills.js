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
