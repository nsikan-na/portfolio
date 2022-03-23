import React from "react";

export default function Header({ text, textColor }) {
  return (
    <h3
      className={`${
        textColor == "white" ? "text-white" : ""
      } text-2xl py-8 text-center font-bold`}
      id={text}
    >
      {text}
    </h3>
  );
}
