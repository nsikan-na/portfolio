import React from "react";
import Image from "next/image";
export default function Skills() {
  return (
    <div>
      {["html", "css", "js", "react", "bootstrap", "tailwind", "sql",'git','node','express','next','nosql'].map(
        (skill) => (
          <Image
          key={skill}
            src={`/images/${skill}.png`}
            alt={`${skill} icon`}
            width="40%"
            height="40%"
          />
        )
      )}
    </div>
  );
}
