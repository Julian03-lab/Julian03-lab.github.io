import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Projects from "./component/projects";
import Skills from "./component/skills";
import Particle from "./component/particles";
import Header from "./component/header";
import NavBar from "./component/nav-bar";
import Footer from "./component/footer";
import Contact from "./component/contact";
import About from "./component/about";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Particle />
    <Header/>
    <NavBar/>
    <About/>
    <Skills />
    <Projects />
    <Contact/>
    <Footer/>
  </React.StrictMode>
);
