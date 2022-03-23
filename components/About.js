import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <div className="">
      <Image
        src="/images/back.jpg"
        alt="about picture"
        width="100%"
        height="100%"
      />
      <p className="">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
      </p>
    </div>
  );
}
