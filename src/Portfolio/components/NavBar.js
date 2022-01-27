import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  const [logo, setLogo] = useState("/images/logo.png");
  const [hamNav, setHamNav] = useState(false);
  const [toggleNav, setToggleNav] = useState(
    <MenuIcon
      className="text-black fixed right-0 top-0 m-5"
      onClick={() => {
        setHamNav(true);
      }}
    />
  );
  useEffect(() => {
    if (hamNav == false) {
      setToggleNav(
        <MenuIcon
          className="text-black fixed right-0 top-0 m-5"
          onClick={() => {
            setHamNav(true);
          }}
        />
      );
    } else {
      setToggleNav(
        <>
          <a
            href="#home"
            className="text-xl"
            onClick={() => {
              setHamNav(false);
            }}
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-xl"
            onClick={() => {
              setHamNav(false);
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-xl"
            onClick={() => {
              setHamNav(false);
            }}
          >
            Contact Me
          </a>
        </>
      );
    }
  }, [hamNav]);
  return (
    <div className="text-white pt-4 w-screen">
      <img src={logo} className="w-32 pt-10" />
      <nav className=" right-0 top-0 fixed p-4 bg-pink-300 w-screen text-right space-x-5 h-14">
        {toggleNav}
      </nav>
    </div>
  );
}
