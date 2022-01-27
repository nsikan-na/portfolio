import React from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Carousel from './Carousel';
export default function Header() {
  return (
    <div className="text-center text-white pb-6 ">
      <h1 className="text-7xl pb-6">Nsikan Akpan</h1>
      <div className="flex justify-center space-x-7">
        <a href="https://www.linkedin.com/in/nsikan-na/" target="_blank">
          <img src="images/pic/linkin.png" className="w-10 " />
        </a>
        <a>
          <img src="images/pic/resume.png" className="w-10 " />
        </a>
        <a href="https://github.com/nsikan-na" target="_blank">
          <img src="images/pic/github.png" className="w-10 " />
        </a>
      </div>
      <div className="text-2xl my-4">
        I am 
        <span
          className="txt-rotate"
          data-period="500"
          data-rotate='[ " a Software Developer.", " a Web developer.", " a Front-End Developer", " passionate about Web Development." ]'
        ></span>
      </div>
      <a href="#contact">
        <button
          style={{ border: "1px solid white" }}
          className="mx-3.5 bg-pink-300 text-white p-2 rounded-xl text-3xl my-4"
        >
          Lets Work Together!
        </button>
      </a>
      <a href="#projects">
        <div className="text-xl my-6">Check Out My Projects!</div>
      </a>
      <a href="#projects">
        <KeyboardDoubleArrowDownIcon className="animate-bounce" />
      </a>
    </div>
  );
}
