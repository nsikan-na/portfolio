import React from "react";

export default function Header({ text, textColor }) {
  return (
    <h3
      data-aos="fade-down"
      className={`${
        textColor == "white" ? "text-white" : ""
      } text-4xl py-8 text-center font-bold`}
      id={text}
    >
      {text}
    </h3>
  );
}
