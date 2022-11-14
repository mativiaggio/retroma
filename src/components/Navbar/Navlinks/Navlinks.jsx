import "./Navlinks.scss";
import { Link } from "react-router-dom";

// export default function Navlinks() {
//   return (
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#home">
//             Home
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#about">
//             About
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#contact">
//             Contact
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#shop">
//             Shop
//           </a>
//         </li>
//         <CartWidget />
//       </ul>
//     </div>
//   );
// }

function Navlinks(props) {
  return (
    <>
      <li className="nav-item">
        <Link
          className="nav-link active"
          aria-current="page"
          to={`${props.section}`}
        >
          {props.name}
        </Link>
      </li>
    </>
  );
}

function Category() {
  return (
    <>
      <li className="nav-item dropdown">
        <a
          className="nav-link"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categiries
        </a>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="/movies">
              All
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/movies/category/adventure">
              Adventure
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/movies/category/horror">
              Horror
            </Link>
          </li>
        </ul>
      </li>
    </>
  );
}

export { Navlinks, Category };
