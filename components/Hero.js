import React from "react";
import { useRouter } from "next/router";
export default function Hero() {
  const router = useRouter();
  return (
    <div className="h-screen justify-center items-center flex flex-col">
      <h1 className="text-2xl font-bold py-2">
        Hi, I'm <span className="primaryText">Nsikan Akpan.</span>
      </h1>
      <h2 className="text-2xl font-bold py-2">I'm a software developer.</h2>
      <div className="">
        {["Skills", "Projects", "Contact Me"].map((txt) => (
          <>
            <a href={`#${txt}`}>
              <button
                key={txt}
                className="rounded-md py-1 px-2 my-2 primaryText primaryButton text-xl font-bold"
              >
                {txt}
              </button>
            </a>
          </>
        ))}
      </div>
    </div>
  );
}
