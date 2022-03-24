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
           
          <Header />
        </div>
        <div id="projects" className="text-center">

          <br />
          {/*projects section
          Projects are reusable component. I pass in information as props */}
                   <Projects
            title="Investment Calculator"
            img="/images/investing.jpg"
            desc="This is an clone of an investment calculator I use often (Ramsey Solution Investment Calculator). My focus of this project was to provide a responsive interface, turn a psd into a website, manage state using React's context api, and connect to an charting api asynchronously based off validated user input."
            skills={["react", "tailwind"]}
            tech="React.js, and Tailwind.css"
            git="https://github.com/nsikan-na/investment_calulator"
            live="https://nsikan-investment-calculator.netlify.app/"
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
            title="Student Grades"
            img="/images/student.jpg"
            desc="This is an application where a teacher can manage student's information. My focus on this project was to connect to a database and grant permissions/ CRUD (create,read,update,destroy) actions to user if they provide valid credentials. (Fake Login Provided)"
            tech="Html, Css, BootStrap, JavaScript, Php, and  Sql"
            skills={["html", "css", "bootstrap", "js", "php", "sql"]}
            git="https://github.com/nsikan-na/student-info"
            live="https://nakpan.info/studentinfo/resetlogin.php"
          />
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
            <div id="contact" className="z-0 w-9/12 mx-auto">
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
