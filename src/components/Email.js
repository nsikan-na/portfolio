import React from "react";
//email component

//when done, 4 things that need to uncommented
//Header: lets connect button
//this component in email
//nav bar for mobile and desktop
export default function Email() {
  return (
    <form  method="Post" name='contact' className="mt-10 pb-10 bg-white w-10/12 mx-auto rounded-md opacity-90 md:w-9/12">
           <input type="hidden" name="form-name" value="contact" />
      <h2 className=" text-pink-300 text-5xl pt-6 md:text-8xl 2xl:text-9xl">
        Contact Me
      </h2>
      <div className="text-xl md:text-3xl lg:my-5 2xl:text-4xl">
        nsikan.na@gmail.com
      </div>
      <label className="text-2xl md:text-4xl 2xl:text-5xl" htmlFor="name" >
        Name/Org
      </label>
      <br />
      <input
        id="name"
        type="text"
        name='name'
        className="bg-pink-200 rounded-md h-10 my-2 w-9/12 md:h-16 2xl:h-20 md:w-7/12 text-1xl p-2 md:text-2xl lg:w-5/12 2xl:w-3/12 2xl:text-4xl"
        style={{ border: "1px solid black" }}
        required
      />
      <br />
      <label
        htmlFor="email"
        className="text-2xl md:text-4xl w-7/12 2xl:text-5xl "
      >
        Email
      </label>
      <br />
      <input
        id="email"
        type="email"
        name='email'
        className="bg-pink-200 rounded-md h-10  my-2 w-9/12 md:h-16 2xl:h-20 md:w-7/12 text-1xl p-2 md:text-2xl lg:w-5/12 2xl:w-3/12 2xl:text-4xl"
        style={{ border: "1px solid black" }}
        required
      />
      <br />
      <label htmlFor="message" className=" text-2xl md:text-4xl 2xl:text-5xl ">
        Message
      </label>
      <br />
      <textarea
        id="message"
        name='message'
        type='text'
        required
        className="bg-pink-200 rounded-md w-10/12 my-2 h-20 md:h-32 2xl:h-32 md:w-9/12 text-1xl p-2 md:text-2xl lg:w-7/12 2xl:w-4/12 2xl:text-4xl"
        style={{ border: "1px solid black" }}
      ></textarea>
      <br />
      <button
        className="mx-3.5 bg-pink-300 text-white p-2 rounded-xl text-2xl mt-2 md:text-4xl 2xl:text-5xl"
        id='contact-submit'
        type='submit'
        style={{ border: "1px solid black" }}
      >
        Send Email!
      </button>
    </form>
  );
}
