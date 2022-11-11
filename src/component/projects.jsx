import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./projects.css";

import calculator from "../assets/projects-images/calculator-project.png";
import portfolio from "../assets/projects-images/Portafolio-Project.png";
import tictactoe from "../assets/projects-images/TaTeTi-javascript.png";
import ToDo from "../assets/projects-images/To-Do-List-Javascript.png";

const projects = [
  {
    id: 11,
    demo: "https://julian-fontana.me",
    github: "https://github.com/Julian03-lab/Julian03-lab.github.io",
    image: portfolio,
    title: "Portafolio",
  },
  {
    id: 12,
    demo: "https://julian-fontana.me/To-Do-List-Javascript",
    github: "https://github.com/Julian03-lab/To-Do-List-Javascript",
    image: ToDo,
    title: "To-Do List",
  },
  {
    id: 13,
    demo: "https://julian-fontana.me/calculadora-javascript",
    github: "https://github.com/Julian03-lab/calculadora-javascript",
    image: calculator,
    title: "Calculadora",
  },
  {
    id: 14,
    demo: "https://julian-fontana.me/TaTeTi-javascript/",
    github: "https://github.com/Julian03-lab/TaTeTi-javascript",
    image: tictactoe,
    title: "Tic-Tac-Toe",
  },
];

function ProjectCard(props) {
  return (
    <div className="project_card">
      <img className="card-img-top" src={props.image} alt="" />
      <div className="card-body">
        <p className="card-title">{props.title}</p>
        <div className="portfolio-buttons d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-4">
          <button className="project_btn-action">
            <i className="bi bi-play-fill"></i>
            <a href={props.demo} target="_blank" rel="noreferrer">
              {" "}
              Demo
            </a>
          </button>
          <button className="project_btn-action">
            <i className="bi bi-github"></i>
            <a href={props.github} target="_blank" rel="noreferrer">
              {" "}
              GitHub
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="projects content-section d-flex flex-column align-items-center gap-2 gap-lg-4">
      <div className="titles">
        <i className="bi bi-pc" />
        Proyectos
      </div>
      <div className="text-center">
        <div className="row g-3">
          {projects.map((project) => (
            <div className="col-12 col-md-6" key={project.id}>
              <ProjectCard
                image={project.image}
                title={project.title}
                demo={project.demo}
                github={project.github}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
