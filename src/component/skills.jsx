import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./skills.css";

import c from "../assets/Logos/c-1.svg";
import css from "../assets/Logos/css.svg";
import github from "../assets/Logos/github.svg";
import html from "../assets/Logos/html.svg";
import javascript from "../assets/Logos/javascript.svg";
import linux from "../assets/Logos/linux.svg";
import python from "../assets/Logos/python.svg";
import react from "../assets/Logos/react.svg";

const skills = [
  {
    id: 1,
    name: "C",
    logo: c,
  },
  {
    id: 2,
    name: "Css",
    logo: css,
  },
  {
    id: 3,
    name: "GitHub",
    logo: github,
  },
  {
    id: 4,
    name: "Html",
    logo: html,
  },
  {
    id: 5,
    name: "Javacript",
    logo: javascript,
  },
  {
    id: 6,
    name: "Linux",
    logo: linux,
  },
  {
    id: 7,
    name: "Python",
    logo: python,
  },
  {
    id: 8,
    name: "React",
    logo: react,
  },
];
function Skill(props) {
  return (
    <div className="skills_card">
      <img
        src={props.logo}
        className="skills_card__img"
        alt={`Logo ${props.name}`}
      />
      <p className="skills_card__info">{props.name}</p>
    </div>
  );
}

export default function Skills() {
  return (
    
    <section className="skills content-section d-flex flex-column align-items-center gap-2 gap-lg-4">
      <div className="titles">
        <i className="bi bi-award" />
        Mis Skills
      </div>
      <div className="text-center">
        <div className="row g-3">
          {skills.map((skill) => (
            <div className="col-6 col-md-3" key={skill.id}>
              <Skill name={skill.name} logo={skill.logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
