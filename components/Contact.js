import React from "react";
import Header from "../components/Header";
import Form from "react-bootstrap/Form";
export default function Contact() {
  return (
    <div className="primaryBackground sectionPadding ">
      <Header text="Contact Me" textColor="white"/>
      <form className="text-center">
        <p className="text-white">nsikan.na@gmail.com</p>
        <input name="name" placeholder="Name" type="text" className="input" />
        <br />
        <input
          name="email"
          placeholder="Email"
          type="email"
          className="input "
        />
        <br />
        <textarea
          name="message"
          placeholder="Message"
          type="message"
          className=" input"
        />
        <br />
        <button
          className="py-1 px-2 mt-3 rounded-xl text-white secondaryButton text-xl font-bold"
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
