import React from "react";

export default function Projects({
  title,
  img,
  desc,
  skills,
  other,
  git,
  live,
}) {
  return (
    <div>
      <a href={live} target="_blank">
        <h3 className="underline text-2xl">{title}</h3>
      </a>
      <br />
      <a href={live} target="_blank">
        <img
          src={img}
          style={{ border: "1px solid black" }}
          className="w-72 mx-auto mb-4 rounded-2xl"
        />
      </a>
      <a href={live} target="_blank">
        <button
          style={{ border: "1px solid black" }}
          className="mx-3.5 bg-pink-300 text-white p-2 rounded-xl text-lg"
        >
          Visit Live Site
        </button>
      </a>
      <a href={git} target="_blank">
        <button
          style={{ border: "1px solid black" }}
          className="mx-3.5 bg-pink-300 text-white p-2 rounded-xl text-lg"
        >
          View Code
        </button>
      </a>
      <p
        style={{ textIndent: "12%" }}
        className="w-9/12 mx-auto py-4 text-left"
      >
        {desc}
      </p>
      <span> {other}</span>

      <div className="flex py-4">
        {skills.map((skill, key) => {
          return (
            <img
              key={key}
              title={`${skill}`}
              className="w-12 mx-auto"
              src={`/images/pic/${skill}.png`}
            />
          );
        })}
      </div>
    </div>
  );
}
