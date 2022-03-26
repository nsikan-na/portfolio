import React from "react";
import changeColor from "../util/changeColor";
export default function ChangeTheme({ setColorChange }) {
  return (
    <div className="p-2 flex justify-center items-center">
      <label for="color" className="primaryText hover:underline cursor-pointer">
        Choose a color!
      </label>
      <input
        type="color"
        name="color"
        id="color"
        onChange={(e) => {
          changeColor(e.target.value);
        }}
        onBlur={() => {
          setColorChange(false);
        }}
      />
    </div>
  );
}
