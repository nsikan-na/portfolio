import React from "react";
import Header from "../components/Header";
import Form from "react-bootstrap/Form";
export default function Contact() {
  return (
    <div className="primaryBackground sectionPadding ">
      <Header text="Contact Me" textColor="white"/>
      <form className="text-center">
        <p className="text-white text-xl">nsikan.na@gmail.com</p>
        <input name="name" placeholder="Name" type="text" className="input md:w-6/12 xl:w-4/12" />
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
