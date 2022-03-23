import React from "react";
export default function ProjectTemplate({
  title,
  skills,
  desc,
  githubLink,
  demoLink,
  video,
}) {
  return (
    <div className="py-4">
      <h4 className="text-lg font-bold py-2">{title}</h4>
      <div className="py-2">
        {skills.map((skill) => (
          <button
            className="px-1 py-1 rounded-xl bg-gray-400 mr-1 font-bold text-gray-50 cursor-text text-sm"
            style={{ border: "1px solid black" }}
            key={skill}
          >
            {skill}
          </button>
        ))}
      </div>
      <p className="py-2 font-semibold">{desc}</p>
      <div className="py-2">
        <a href={demoLink} target="_blank">
          <button className=" px-1 primaryText primaryButton font-bold rounded-md">
            View Live Site
          </button>
        </a>
        <a href={githubLink} target="_blank">
          <button className=" px-1 primaryText primaryButton font-bold rounded-md">
            View Source Code
          </button>{" "}
        </a>
      </div>
      <div className='flex justify-center items-center mt-4'>
        <iframe
          width="640px"
          height="360px"
          allow="fullscreen"
          src={`https://www.youtube.com/embed/${video}`}
          controls
        ></iframe>
      </div>
    </div>
  );
}
