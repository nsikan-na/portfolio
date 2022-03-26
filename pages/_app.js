import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Context } from "../context";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 1000,
      once:true
    });
  }, []);
  return (
    <Context.Provider value={{}}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}
export default MyApp;
