import React from "react";
import changeColor from "../../util/changeColor";
export default function Hero() {
  return (
    <div
      className="h-screen  justify-center items-center flex flex-col"
      data-aos="fade-down"
    >
      <div className="sectionPadding ">
        <h1 className="text-5xl font-bold text-center ">
          Hi, I'm{" "}
          <span className="primaryText ">
            Nsikan Akpan
            <a
              href="https://smv-calc.vercel.app/"
              target="_blank"
              style={{ cursor: "text" }}
            >
              .
            </a>
          </span>
        </h1>
        {/* <h2 className="text-4xl font-bold py-2 text-center ">
          I'm a software developer
          <a
            href="https://smv-calc.vercel.app/"
            target="_blank"
            style={{ cursor: "text" }}
          >
            .
          </a>
        </h2> */}
        <div>
          <div className="flex flex-col md:flex-row py-2">
            <div className="rounded-md w-full px-2 text-center   text-xl md:text-2xl font-bold">
              nsikan.na@gmail.com
            </div>
          </div>
          <div className="p-2 flex justify-center items-center">
            <label
              htmlFor="color"
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
    </div>
  );
}
