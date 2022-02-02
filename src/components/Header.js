import React from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Carousel from "./Carousel";
export default function Header() {
  return (
    <div className="text-center text-white pb-6 shadow ">
      <h1 className="text-7xl pb-10 md:text-9xl font-semibold">Nsikan <br></br> Akpan</h1>
      <div className="grid grid-cols-3 col-auto 2xl:py-6  lg:flex lg:justify-center">
        <a href="https://www.linkedin.com/in/nsikan-na/" target="_blank">
          <img src="images/linkin.png" className="w-5/12 mx-auto md:w-3/12 lg:w-16  2xl:w-22" />
        </a>
          <a href="/images/Nsikan_Akpan_Resume.pdf" target="_blank">
            <img src="images/resume.png" className="w-5/12 lg:mx-20 mx-auto md:w-3/12 lg:w-16  2xl:w-22" />
          </a>

        <a href="https://github.com/nsikan-na" target="_blank">
          <img src="images/github.png" className="w-5/12 mx-auto md:w-3/12 lg:w-16 2xl:w-22" />
        </a>
      </div>
      <div className="text-2xl my-4 w-11/12 md:text-3xl 2xl:py-6 2xl:text-4xl">
        I am
        <span
          className="txt-rotate"
          data-period="500"
          data-rotate='[ " a Software Developer.", " a Web developer.", " a Front-End Developer."]'
        ></span>
      </div>
      <a href="#contact">
        <button
          style={{ border: "1px solid white" }}
          className="mx-3.5 bg-pink-300 text-white p-2 rounded-xl text-3xl my-4 md:text-5xl md:p-4 lg:text-4xl 2xl:text-5xl"
        >
          Lets Work Together!
        </button>
      </a>
      <a href="#projects">
        <div className="text-xl my-6 md:text-4xl md:py-2 lg:py-0 lg:text-3xl 2xl:py-0 2xl:text-4xl" >Check Out My Projects!</div>
      </a>
      <a href="#projects">
        <KeyboardDoubleArrowDownIcon className="animate-bounce" />
      </a>
    </div>
  );
}
