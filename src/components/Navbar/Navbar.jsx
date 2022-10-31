import Navlinks from "./Navlinks/Navlinks";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav>
      <div className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            Loombar
          </a>
          <button
            className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          {/* Item list */}
          <Navlinks />
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
