import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Email from "./components/Email";

export default function App() {
  return (
    <>
      <div id="home" className="">
        <div className="z-50 bg-pink-300 rounded-b-3xl  h-full w-full opacity-90 align-auto">
          <NavBar /> {/* Header and nav bar components */}
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
            title="Student Information"
            img="/images/student.jpg"
            desc="This is an application where a teacher can manage their student's information. The teacher is able to view all the information without signing in, but must sign in to be able to add, update, or delete student information. The teacher can setup a new account if they do not already have one, and can also change their password once they sign in. All data is stored in a database. (Fake Login Provided)"
            other="Built using Html, Css, BootStrap, JavaScript, Php, and  Sql"
            skills={["html", "css", "bootstrap", "js", "php", "sql"]}
            git="https://github.com/nsikan-na/student-info"
            live="https://nakpan.info/studentinfo/resetlogin.php"
          />
          <br />
          {/*line break between projects */}
          <hr
            className="mx-auto"
            style={{
              color: "rgba(249, 168, 212",
              backgroundColor: "rgba(249, 168, 212",
              height: 3,
              width: "90%",
            }}
          />

          <br />
          <Projects
            title="Widgets"
            img="/images/widget.jpg"
            desc="This project consists of multiple applications that consume apis for cool features. "
            skills={["html", "css", "js", "react", "tailwind"]}
            other="Built using React.js and Tailwind.css (Html,Css, JavaScript)"
            widgets={[
              `(1) Image Search - This widget fetches images from the unsplash api based off user input .`,
            ]}
            git="https://github.com/nsikan-na/spa_widgets"
            live="https://nsikan-spa-widgets.netlify.app/"
          />
        </div>
        <div className="text-center z-0">
          {/* gradient that starts at the bottom of the screen*/}
          <div
            className="pt-10 pb-20 z-0"
            style={{
              backgroundImage: "linear-gradient(white,#f3acd7)",
              height: "15%",
            }}
          >
            <div id="contact" className="z-0">
              <br />
              <br />
              {/* Contact form component */}
              <Email />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
