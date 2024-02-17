import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Alert from "./components/Alert";
export default function index({}) {
  setInterval(sendAPIRequest, 60000);
  return (
    <>
      <Alert />
      <Hero />
      <Skills />
      <Projects />
    </>
  );
}

export const getStaticProps: any = async () => {
  sendAPIRequest();

  return {
    props: {},
    revalidate: 300,
  };
};

function sendAPIRequest() {
  const urls = ["https://charlie-glass-admin-api.vercel.app/"];

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  urls.forEach(
    (url) =>
      fetch(url, options).then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
    // .then((data) => {
    //   console.log(data);
    // })
    // .catch((error) => {
    //   console.error("There was a problem with your fetch operation:", error);
    // })
  );
  console.log(
    "Cold Start " +
      new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
  );
}
