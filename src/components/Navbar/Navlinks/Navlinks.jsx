import CartWidget from "../CartWidget/CartWidget";
import "./Navlinks.scss";

export default function Navlinks() {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#contact">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#shop">
            Shop
          </a>
        </li>
        <CartWidget />
      </ul>
    </div>
  );
}
