import "./Item.scss";

import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div
      className="movie-card"
      style={{ backgroundImage: `url("${props.imgpath}/${props.imglocal}")` }}
    >
      <div className="backdrop">
        <h1>{props.title}</h1>
        <p>{props.descr}</p>
        <Link to={`/movies/billboard/${props.id}-${props.title}`}>
          <button>more</button>
        </Link>
      </div>
    </div>
  );
}

export { Item };
