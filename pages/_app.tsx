import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import { Context } from "../context";
import changeColor from "../util/changeColor";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [alert, setAlert] = useState<{}>({});
  const themeColor: string[] = [
    //array of colors
    "#00CCFF",
    "#FF0000",
    "green",
    "#FF00D0",
    "#AE00FF",
    "#0033FF",
    "#FF8800",
  ];
  useEffect(() => {
    //sets the initial theme color
    changeColor(themeColor[Math.floor(Math.random() * themeColor.length)]);
  }, []);
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
