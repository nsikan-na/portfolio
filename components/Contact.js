import React from "react";
import Header from "../components/Header";
import Image from "next/image";
export default function Contact() {
  return (
    <div className="primaryBackground sectionPadding ">
      <Header text="Contact Me" textColor="white" />
      <form className="text-center">
        <div className="flex justify-center -mt-5">
          {[
            {
              title: "linkedin",
              link: "https://www.linkedin.com/in/nsikan-na/",
            },
            { title: "github", link: "https://github.com/nsikan-na" },
            // { title: "resume", link: "/images/Nsikan_Akpan_Resume.pdf" },
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
        <p className="text-white text-xl">nsikan.na@gmail.com</p>
        <input
          name="name"
          placeholder="Name"
          type="text"
          className="input md:w-6/12 xl:w-4/12"
        />
        <br />
        <input
          name="email"
          placeholder="Email"
          type="email"
          className="input  text-xl md:w-6/12 xl:w-4/12"
        />
        <br />
        <textarea
          name="message"
          placeholder="Message"
          type="message"
          className=" input text-xl md:w-6/12 xl:w-4/12"
        />
        <br />
        <button
          className="py-1 px-2 mt-3 rounded-xl text-white secondaryButton text-2xl font-bold"
          onClick={(e) => {
            e.preventDefault();
            console.log("Form Submitted!");
          }}
        >
          Send Email
        </button>
      </form>
    </div>
  );
}
