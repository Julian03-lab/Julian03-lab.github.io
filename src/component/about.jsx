import React from 'react'
import "./about.css"

function About() {
  return (
    <section className="content-section d-flex flex-column align-items-center gap-1 gap-lg-3" id="about">
            <h1 className="titles text-center">
                <i className="bi bi-file-person-fill"></i>Sobre Mi
            </h1>
            <div className="w-75 d-flex flex-column justify-content-center align-items-center gap-3 position-relative">
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center about-content py-4 py-lg-5">
                        <div
                            className="col-12 col-lg-4 col-xl-3 d-flex flex-column align-items-center gap-1 gap-lg-2 mb-2 mb-lg-0 text-center">
                            <div className="d-flex flex-column gap-2 align-items-center">
                                <img src="https://pbs.twimg.com/profile_images/1357097446028021764/j_BHPVAu_400x400.jpg" alt="Foto Julian Fontana"
                                    id="user-photo"/>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-7 d-flex flex-column gap-2">
                            <p className="text-break text-center text-lg-start about-element" id="about-description-text">
                                Soy Julián Fontana, nací en San Antonio Oeste, Rio Negro,
                                Argentina y tras haber vivido toda mi vida en ese lugar,
                                decidí trasladarme a San Carlos de Bariloche, donde me
                                encuentro cursando la carrera de Ingeniería en Computación en
                                la Universidad de Río Negro.<br />
                                Desde que era chico siempre sentí una gran curiosidad y gusto
                                por el mundo tecnológico, lo que me motivo a aprender a
                                programar y a ser cada día mejor en este ámbito, ya que
                                considero que no hay límite para seguir aprendiendo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default About