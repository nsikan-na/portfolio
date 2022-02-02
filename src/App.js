import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Email from "./components/Email";

export default function App() {
  return (
    <>
      <div id="home" className="bg-gray-100">
        <div className="z-50 bg-pink-300  h-full w-full opacity-90 align-auto">
          <NavBar />
           {/* Header and nav bar components */}
          <Header />
        </div>
        <div id="projects" className="text-center">
          <br />
          <br />
          <h2 className=" text-pink-300 text-5xl pt-6  md:text-8xl lg:text-8xl">
            Projects
          </h2>
          <br />
          {/*projects section
          Projects are reusable component. I pass in dynamic information as props */}
          <Projects
            title="Student Grades"
            img="/images/student.jpg"
            desc="This is an application where a teacher can manage student's information. My focus on this project was to connect to a database and to grant permissions/ CRUD (create,read,update,destroy) actions to user if they provide valid credentials. (Fake Login Provided)"
            tech="Html, Css, BootStrap, JavaScript, Php, and  Sql"
            skills={["html", "css", "bootstrap", "js", "php", "sql"]}
            git="https://github.com/nsikan-na/student-info"
            live="https://nakpan.info/studentinfo/resetlogin.php"
          />
          <br />

          <hr
            className="mx-auto shadow"
            style={{
              color: "rgba(249, 168, 212",
              backgroundColor: "rgba(249, 168, 212",
              height: 3,
              width: "90%",
            }}
          />

          <br />
          <Projects
            title="Investment Calculator"
            img="/images/investing.jpg"
            desc="This is an clone of an investment calculator I use often (Ramsey Solution Investment Calculator). My focus of this project was to provide a responsive interface, turn a psd into a website, manage state using React's context api, connect to an charting api asynchronously based off validated user input."
            skills={["react", "tailwind","material"]}
            tech="React.js, Tailwind.css, and Material UI"
            git="https://github.com/nsikan-na/investment_calulator"
            live="https://nsikan-investment-calculator.netlify.app/"
          />

          {/* <hr
            className="mx-auto shadow"
            style={{
              color: "rgba(249, 168, 212",
              backgroundColor: "rgba(249, 168, 212",
              height: 3,
              width: "90%",
            }}
          />

          <br />
          <Projects
            title="Images Search"
            img="/images/google-images.jpg"
            desc="This is a clone of google but only fetches 10 images bases off user input from the unsplash api and displays one randomly."
            skills={["html", "css", "js", "react", "tailwind"]}
            other="Built using React.js and Tailwind.css (Html,Css, JavaScript)"
            git="https://github.com/nsikan-na/images-search"
            live="https://nsikan-image-search.netlify.app/"
          /> */}
        </div>
        <div className="text-center z-0">
          {/* gradient that starts at the bottom of the screen*/}
          <div
            className="pt-10 pb-20 z-0"
            style={{
              backgroundImage: "linear-gradient(rgba(243, 244, 246),#f3acd7)",
              height: "15%",
            }}
          >
            <div id="contact" className="z-0">
              <br />
              <br />

              <Email />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
