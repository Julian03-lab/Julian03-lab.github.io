import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Projects from "./component/projects";
import Skills from "./component/skills";
import Particle from "./component/particles";
import Header from "./component/header";
import NavBar from "./component/nav-bar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Particle />
    <Header/>
    <NavBar/>
    <Skills />
    <Projects />
  </React.StrictMode>
);
