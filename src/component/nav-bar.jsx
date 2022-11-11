import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import "./nav-bar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <div id="julian-fontana" className="mx-0 mx-lg-4">
          #JulianFontana
        </div>
        <button
          className="navbar-toggler header-element collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#customNavbar"
          aria-controls="customNavbar"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="customNavbar"
        >
          <ul className="my-3 my-lg-0 d-flex flex-row justify-content-center gap-4">
            <li>
              <a
                href="https://www.instagram.com/julianfontana003"
                target="_blank"
                className="header-element"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Julian03-lab"
                target="_blank"
                className="header-element"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/julian-fontana-391a90206/"
                target="_blank"
                className="header-element"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
          </ul>
          <div className="mt-3 my-lg-0 d-flex flex-row justify-content-center gap-4">
            <a href="" download="" id="download-button">
              <i className="bi bi-download"></i> Descargar CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
