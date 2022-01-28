import React from "react";

export default function Email() {
  return (
    <form className="mt-10 pb-10 bg-white w-10/12 mx-auto rounded-md opacity-90 md:w-9/12">
      <h2 className=" text-pink-300 text-5xl pt-6 md:text-8xl 2xl:text-9xl">Contact Me</h2>
      <div className="text-xl md:text-3xl lg:my-5 2xl:text-4xl" >nsikan.na@gmail.com</div>
      <label className="text-2xl md:text-4xl 2xl:text-5xl" for="name/org">
        Name/Org
      </label>
      <br />
      <input
        id="name/org"
        type="text"
        className="bg-pink-200 rounded-md h-10  my-2 w-9/12 md:h-16 2xl:h-20"
        style={{ border: "1px solid black" }}
      />
      <br />
      <label for="email" className="text-2xl md:text-4xl w-7/12 2xl:text-5xl "  >
        Email
      </label>
      <br />
      <input
        id="email"
        type="text"
        className="bg-pink-200 rounded-md h-10  my-2 w-9/12 md:h-16 2xl:h-20"
        style={{ border: "1px solid black" }}
      />
      <br />
      <label for="message" className=" text-2xl md:text-4xl 2xl:text-5xl">
        Message
      </label>
      <br />
      <textarea
        id="message"
        className="bg-pink-200 rounded-md w-10/12 my-2 h-20 md:h-32 2xl:h-32"
        style={{ border: "1px solid black" }}
      ></textarea>
      <br />
      <button
        className="mx-3.5 bg-pink-300 text-white p-2 rounded-xl text-2xl mt-2 md:text-4xl 2xl:text-5xl"
        style={{ border: "1px solid black" }}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Send Email!
      </button>
    </form>
  );
}
