import React from 'react'
import "./contact.css"

function Contact() {
  return (
    <section className="content-section d-flex flex-column align-items-center gap-5" id="contact">
            <h1 className="titles"><i className="bi bi-mailbox2"></i> Contacto</h1>
            <div className="contact-content text-center">
                <div className="option-white">¿Quieres contactar conmigo?</div>
                <div className="option-orange">Hazlo al siguiente correo:</div>
                <div className="option-white">julian03yt@gmail.com</div>
                <a href="mailto:julian03yt@gmail.com"><i className="bi bi-hand-index option-orange"></i></a>
            </div>
        </section>
  )
}

export default Contact