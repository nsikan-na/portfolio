import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Email from "./components/Email";

export default function App() {
  return (
    <>
      <div id="home" className="">
        <div className="bg-pink-300 rounded-b-3xl opacity-90 h-screen align-auto">
          <NavBar />
          <Header />
        </div>
        <div id="projects" className="text-center">
          <br />
          <h2 className="underline text-pink-300 text-5xl pt-6">Projects</h2>
          <br />
          <Projects
            title="Manage Student Information"
            img="/images/student.jpg"
            desc="This is a application where a teacher can manage their student's information. The teacher is able to view all the information without signing in, but must sign in to be able to add, update, or delete student information. The teacher can setup a new account if they do not already have one, and can also change their password once they sign in."
            other="(Fake Login Provided)"
            skills={["html", "css", "js", "php", "sql"]}
            git="https://github.com/nsikan-na/student-info"
            live="https://nakpan.info/studentinfo/intro.php"
          />
          <br />
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
            desc="This application consists of multiple simple widgets I build to practice React/Tailwind."
            skills={["html", "css", "js", "react", "tailwind"]}
            git="https://github.com/nsikan-na/spa_widgets"
            live="https://nsikan-spa-widgets.netlify.app/"
            other="(Under Construction)"
          />
        </div>
        <div className="text-center bg-grey-400">
          <div
            className="pt-10 pb-32"
            style={{
              backgroundImage: "linear-gradient(white,#f3acd7)",
              height: "20%",
            }}
          >
            <div id="contact">
              <Email />
            </div>
            <p>(portfolio site looks good on mobile. email form is not working 
              yet.)</p>
          </div>
        </div>
      </div>
    </>
  );
}
