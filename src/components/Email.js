import React from "react";

export default function Email() {
  return (
    <form className="pb-4 bg-white w-72 mx-auto rounded-md opacity-90 ">
      <h2 className="underline text-pink-300 text-5xl pt-6 ">Email Me</h2>
      <div>
        nsikan.na@gmail.com
      </div>
      <label>Name/Org</label>
      <br />
      <input
        type="text"
        className="bg-pink-200 rounded-md h-8"
        style={{ border: "1px solid black" }}
      />
      <br />
      <label>Email</label>
      <br />
      <input
        type="text"
        className="bg-pink-200 rounded-md h-8"
        style={{ border: "1px solid black" }}
      />
      <br />
      <label>Message</label>
      <br />
      <textarea
        className="bg-pink-200 rounded-md w-48 h-18"
        style={{ border: "1px solid black" }}
      ></textarea>
      <br />
      <button
        className="mx-3.5 bg-pink-300 text-white p-2 rounded-xl text-lg mt-2"
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
