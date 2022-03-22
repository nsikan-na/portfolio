import React from "react";

export default function Contact() {
  return (
    <div>
      <h5>Contact Me</h5>
      <form>
        <input name="name" placeholder="name" type="text" />
        <br/>
        <input name="email" placeholder="email" type="email" />
        <br/>
        <textarea name="message" placeholder="Message" type="message" />
        <br/>
        <button
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
