import React, { useState } from "react";
import Image from "next/image";
export default function ProjectTemplate({
  title,
  skills,
  desc,
  githubLink,
  demoLink,
  gif,
}) {
  const [playGif, setPlayGif] = useState(false);
  return (
    <div className="py-4 lg:flex lg:justify-evenly ">
      <div className="lg:w-4/12">
        <a href={demoLink} target="_blank">
          <h4 className="text-2xl font-bold py-2 projectLink">{title}</h4>
        </a>
        <div className="py-2 ">
          {skills.map((skill) => (
            <button
              className="px-1 py-1 rounded-xl bg-gray-400 mr-1 mt-1 font-bold text-gray-50 cursor-text text-sm"
              style={{ border: "1px solid black" }}
              key={skill}
            >
              {skill}
            </button>
          ))}
        </div>
        <ul>
          {desc.map((item) => (
            <li className="font-semibold text-xl " key={item}>
              {item}
            </li>
          ))}
        </ul>
        <div className="py-2 flex">
          <a href={demoLink} target="_blank">
            <button className=" px-1 primaryText primaryButton font-bold rounded-md text-xl">
              Visit Site
            </button>
          </a>
          <a href={githubLink} target="_blank">
            <button className="px-1 ml-2 primaryText primaryButton font-bold rounded-md text-xl">
              View Code
            </button>
          </a>
        </div>
      </div>

      <div className="lg:w-5/12 ">
        <div className="flex justify-center items-center mt-4  w-full h-full ">
          {playGif ? (
            <Image
              src={`/images/${gif}.gif`}
              width="640%"
              height="360%"
              alt={title}
              className="rounded-lg cursor-pointer"
              onClick={() => {
                setPlayGif(false);
              }}
            />
          ) : (
            <div
              className="primaryProject rounded-lg cursor-pointer relative text-center"
              onClick={() => {
                setPlayGif(true);
              }}
            >
              <div className="text-xl font-semibold centerProjectText ">
                Click to Play/Pause Demo Gif
              </div>
              <div className="invisible">
                <Image
                  src={`/images/${gif}.gif`}
                  width="640%"
                  height="360%"
                  alt={title}
                  className="rounded-lg cursor-pointer "
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
