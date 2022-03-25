import React, { useState } from "react";
import "../styles/globals.css";
import { Context } from "../context";
function MyApp({ Component, pageProps }) {
  const [showChangeTheme, setShowChangeTheme] = useState(true);
  // setTimeout(() => {
  //   setShowChangeTheme(true);
  // },1000);
  return (
    <Context.Provider value={{ showChangeTheme, setShowChangeTheme }}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}
export default MyApp;
