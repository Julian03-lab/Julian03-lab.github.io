import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

function Header() {
  return (
    <header className="d-flex flex-column align-items-center justify-content-center header">
        <div className="title text-center">Julián Fontana</div>
        <div className="subtitle text-center text-break">
            <span>Estudiante Ing. Computacion</span>
        </div>
    </header>
  )
}

export default Header