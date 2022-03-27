import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import { Context } from "../context";
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [alert, setAlert] = useState<{}>({});
  useEffect(() => {
    //AOS is for the animation
    AOS.init({
      offset: 50,
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Context.Provider value={{ alert, setAlert }}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}
export default MyApp;
