import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Projects from "./component/projects";
import Skills from "./component/skills";
import Particle from './component/particles'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> 
    <Particle/>
    <Skills />
    <Projects />
  </React.StrictMode>
);
