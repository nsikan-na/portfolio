import React from "react";

//Projects component
//reusable since none of the importable data is hard-coded
export default function Projects({
  //destructured out props for ease of use
  title,
  img,
  desc,
  skills,
  other,
  git,
  live,
  widgets,
}) {
  return (
    <div>
      <a href={live} target="_blank">
        <h3 className=" text-2xl underline md:text-5xl">{title}</h3>
      </a>
      <br />
      <a href={live} target="_blank">
        <img
          src={img}
          style={{ border: "1px solid black" }}
          className="w-10/12 mx-auto mb-4 rounded-2xl lg:w-5/12 2xl:w-4/12"
        />
      </a>
      <a href={live} target="_blank">
        <button
          style={{ border: "1px solid black" }}
          className="mx-3.5 bg-pink-300 text-white p-2 rounded-xl text-lg md:text-4xl lg:text-3xl 2xl:text-5xl"
        >
          Visit Live Site
        </button>
      </a>
      <a href={git} target="_blank">
        <button
          style={{ border: "1px solid black" }}
          className="mx-3.5 bg-pink-300 text-white p-2 rounded-xl text-lg md:text-4xl lg:text-3xl 2xl:text-5xl"
        >
          View Code
        </button>
      </a>
      <p
        style={{ textIndent: "12%" }}
        className="w-10/12 mx-auto py-4 text-left md:text-3xl 2xl:text-4xl"
      >
        {desc}
      </p>
      {(() => {
        if (widgets === undefined || widgets === undefined) return;
        const colors = ["text-red-600"];
        return widgets.map((widget, i) => {
          return (
            <p
              key={i}
              className={`w-11/12  md:text-3xl 2xl:text-4xl my-2 ${colors[i]}`}
            >
              {widget}
            </p>
          );
        });
      })()}
      <span className="md:text-3xl 2xl:text-4xl"> {other}</span>

      <div className="justify-center flex flex-wrap py-4 mx-8">
        {skills.map((skill, key) => {
          //displays each skills out of the skills array prop
          return (
            <img
              key={key}
              title={`${skill}`}
              className="w-3/12 my-2 mx-2 md:w-2/12 md:mx-8 lg:w-1/12  2xl:w-40"
              src={`/images/pic/${skill}.png`}
            />
          );
        })}
      </div>
    </div>
  );
}
