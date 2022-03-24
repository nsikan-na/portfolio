import React from "react";
import Image from "next/image";
export default function Nav() {
  return (
    <div className="flex flex-col justify-between h-1/6  fixed bottom-3 right-1">
      {[
        { title: "linkedin", link: "https://www.linkedin.com/in/nsikan-na/" },
        { title: "github", link: "https://github.com/nsikan-na" },
        { title: "resume", link: "/images/Nsikan_Akpan_Resume.pdf" },
      ].map((links) => (
        <div key={links.title}>
          <a href={links.link} target="_blank">
            <Image
              key={links.title}
              src={`/images/${links.title}.png`}
              width="40%"
              height="40%"
              alt={`${links.title} icon`}
              className="z-50"
            />
          </a>
        </div>
      ))}
    </div>
  );
}
