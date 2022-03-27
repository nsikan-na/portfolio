import React, { useState, useContext } from "react";
import Header from "./Header";
import Image from "next/image";
import { useRouter } from "next/router";
import { Context } from "../context";
import CircularProgress from "@mui/material/CircularProgress";
export default function Contact() {
  const [spinner, setSpinner] = useState(false);
  const { setAlert }: any = useContext(Context);
  const router = useRouter();
  async function sendEmailHandler(e: any) {
    setSpinner(true);
    const response = await fetch("api/email", {
      method: "POST",
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setSpinner(false);
    if (!data.success) {
      return setAlert({ color: "bg-red-600", text: data.message });
    }
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.message.value = "";
    setAlert({ color: "bg-green-600", text: "Email Sent!" });
    router.replace("/");
  }
  return (
    <div className="primaryBackground sectionPadding ">
      <Header text="Contact Me" textColor="white" />
      <form
        className="text-center"
        data-aos="fade-down"
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();

          sendEmailHandler(e);
        }}
      >
        <div className="flex justify-center -mt-5">
          {[
            {
              title: "linkedin",
              link: "https://www.linkedin.com/in/nsikan-na/",
            },
            { title: "github", link: "https://github.com/nsikan-na" },
            { title: "resume", link: "/images/Resume-Nsikan-Akpan.pdf" },
          ].map((links: { title: string; link: string }) => (
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
          className=" input text-xl md:w-6/12 xl:w-4/12"
        />
        <br />

        {spinner ? (
          <CircularProgress
            color="inherit"
            className="mt-2 text-white scale-75"
          />
        ) : (
          <button
            type="submit"
            className="py-1 px-2 mt-3 rounded-xl text-white secondaryButton text-2xl font-bold"
          >
            Send Email
          </button>
        )}
      </form>
    </div>
  );
}
