import React, { useState } from "react";
import changeColor from "../util/changeColor";
export default function Hero() {
  return (
    <div className="h-screen  justify-center items-center flex flex-col">
      <div className="sectionPadding " data-aos="fade-down">
        <h1 className="text-5xl font-bold py-2 text-center ">
          Hi, I'm <span className="primaryText ">Nsikan Akpan.</span>
        </h1>
        <h2 className="text-4xl font-bold py-2 text-center ">
          I'm a web developer.
        </h2>
      </div>
      <div data-aos="fade-down" data-aos-delay="400">
        <div className="flex flex-col md:flex-row">
          {["Skills", "Projects", "Contact Me"].map((txt) => (
            <div key={txt} className="inline">
              <a href={`#${txt}`}>
                <button className="rounded-md w-full py-1 px-2  primaryText primaryButton text-xl md:text-2xl font-bold">
                  {txt}
                </button>
              </a>
            </div>
          ))}
        </div>

        <div className="p-2 flex justify-center items-center">
          <label
            for="color"
            className="primaryText hover:underline cursor-pointer text-lg"
          >
            Choose a color!
          </label>
          <input
            type="color"
            name="color"
            id="color"
            className=""
            onChange={(e) => {
              changeColor(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
