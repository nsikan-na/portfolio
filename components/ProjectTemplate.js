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
    <div>
      <h4>{title}</h4>
      {skills.map((skill) => (
        <button key={skill}>{skill}</button>
      ))}
      <p>{desc}</p>
      <div>
        <a href={demoLink} target="_blank">
          <button>View Demo</button>
        </a>
        <a href={githubLink} target="_blank">
          <button>View Code</button>{" "}
        </a>
      </div>
      <br />
      <iframe width="640px" height="360px" src={`https://www.youtube.com/embed/${video}`} controls></iframe>
    </div>
  );
}
