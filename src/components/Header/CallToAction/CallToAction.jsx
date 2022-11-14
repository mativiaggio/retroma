import "./CallToAction.scss";
import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <>
      <Link to="/movies">
        <button className="btn">movies</button>
      </Link>
    </>
  );
}
