import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import { Context } from "../context";
import changeColor from "../util/changeColor";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [alert, setAlert] = useState<{}>({});
  const themeColor: string[] = [
    //array of colors
    "#FF0000",
    "green",
    "#FF00D0",
    "#AE00FF",
    "#0033FF",
    "#0073ff",
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
      <Head>
        <title>Nsikan Akpan Portfolio</title>
        <meta name="description" content="Nsikan Akpan Portfolio" key="desc" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Nsikan Akpan Portfolio" />
        <meta property="og:description" content="Nsikan Akpan Portfolio" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="noindex,nofollow" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <meta property="og:image" content="/images/logo.png" />
        <link rel="icon" href="/images/logo.png" />
        <meta name="author" content="Nsikan Akpan" />
      </Head>
      <Component {...pageProps} />
    </Context.Provider>
  );
}
export default MyApp;
