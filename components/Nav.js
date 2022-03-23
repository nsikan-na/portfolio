import React from "react";
import Image from "next/image";
export default function Nav() {
  return (
    <div className="flex flex-col justify-between h-1/6  fixed bottom-3 right-5">
      {["linkedin", "github", "resume"].map((links) => (
        <Image
          key={links}
          src={`/images/${links}.png`}
          width="40%"
          height="40%"
          alt={`${links} icon`}
          className="z-50"
        />
      ))}
    </div>
  );
}
