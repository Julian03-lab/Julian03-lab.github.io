import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <footer
        className="content-section d-flex flex-column flex-lg-row justify-content-between align-items-center text-center p-2 p-lg-4 h-auto gap-3">
        <div id="copyright">Copyright&copy; 2022 - Página creada por <em>Julián Fontana</em> - Todos los derechos
            reservados</div>
        <ul className="d-flex flex-column flex-md-row gap-2 gap-md-4">
            <li>
                <a href="https://www.instagram.com/julianfontana003" target="_blank"
                    className="header-element">Instagram</a>
            </li>
            <li>
                <a href="https://github.com/Julian03-lab" target="_blank" className="header-element">GitHub</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/julian-fontana-391a90206/" target="_blank"
                    className="header-element">LinkedIn</a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer