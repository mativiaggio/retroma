import { Navlinks } from "./Navlinks/Navlinks";
import { Category } from "./Navlinks/Navlinks";
import CartWidget from "./CartWidget/CartWidget";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav>
      <div className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Retroma
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              {/* NAVLINKS CON COMPONENTE */}
              <Navlinks name="Home" section="/" />
              <Navlinks name="Movies" section="/movies" />
              <Navlinks name="About" section="/about" />
              <Navlinks name="Contact" section="/contact" />
              <Category />
              <CartWidget />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
