import React from "react";

export default function Hero() {
  return (
    <div>
      <h1>Hi, I'm Nsikan Akpan.</h1>
      <h2>I'm a web developer.</h2>
      <div>
        {["About", "Skills", "Projects", "Contact Me"].map((txt) => (
          <button key={txt}>{txt}</button>
        ))}
      </div>
    </div>
  );
}
