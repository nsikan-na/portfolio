import React from "react";

const Header: React.FC<{ text: string; textColor?: string }> = ({
  text,
  textColor,
}) => {
  return (
    <h3
      className={`${
        textColor === "white" ? "text-white" : ""
      } text-4xl py-8 text-center font-bold`}
      id={text}
    >
      {text}
    </h3>
  );
};
export default Header;
