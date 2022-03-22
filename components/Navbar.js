import React from "react";
import Image from "next/image";
export default function Navbar() {
  return (
    <div>
      {["linkedin", "github", "resume"].map((links) => (
        <Image
          key={links}
          src={`/images/${links}.png`}
          width="40%"
          height="40%"
          alt={`${links} icon`}
        />
      ))}
    </div>
  );
}
