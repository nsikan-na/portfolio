import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";//hamburger menu from material ui

export default function NavBar() {
  const [hamNav, setHamNav] = useState(false);  // used boolean value to toggle the nav bar on mobile

  //nav bar is toggled on by default.

  const [toggleNav, setToggleNav] = useState(
    <MenuIcon
      className="text-black fixed right-0 top-0 m-5 z-50 md:invisible"
      onClick={() => {
        setHamNav(true);
      }}
    />
  );
  useEffect(() => {
    //renders everytime hamNav is clicked
    //mobile nav bar 
    //all become invisible when not on mobile 
    if (hamNav == false) {
      setToggleNav(
        <MenuIcon
          className="text-black fixed right-0 top-0 m-5 z-50  md:invisible"
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
            className="text-xl md:invisible"
            onClick={() => {
              setHamNav(false);
            }}
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-xl md:invisible"
            onClick={() => {
              setHamNav(false);
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-xl md:invisible"
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
    <div className="text-white pt-4 w-full z-50">
      <a href="#home">
        <img src="/images/logo.png" className="w-5/12 pt-10 -rotate-12 md:w-4/12 lg:w-3/12 2xl:w-2/12" />
      </a>
      <nav className="z-50 right-0 top-0 fixed p-4 bg-pink-300 w-full text-right space-x-5 h-14  md:h-16 2xl:h-20">
        {toggleNav}
        <div className="invisible md:visible space-x-5 ">

        <a
             href="#home" 
            className="text-3xl lg:text-4xl 2xl:text-5xl" 
            onClick={() => { 
               setHamNav(false); 
             }} 
           > 
           Home 
           </a> 
           <a 
             href="#projects" 
             className="text-3xl lg:text-4xl 2xl:text-5xl" 
             onClick={() => { 
               setHamNav(false); 
             }} 
           > 
             Projects 
          </a> 
         <a
            href="#contact"
            className="text-3xl lg:text-4xl 2xl:text-5xl"
            onClick={() => {
              setHamNav(false);
            }}
          >
            Contact Me
          </a> 
           </div> 
      </nav>
    </div>
  );
}
