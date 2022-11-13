import "./Item.scss";

function Item(props) {
  return (
    <div
      className="movie-card"
      style={{ backgroundImage: `url("assets/movies/${props.imglocal}")` }}
    >
      <div className="backdrop">
        <h1>{props.title}</h1>
        <p>{props.descr}</p>
        <a href="#buy">
          <button>Ticket ${props.price}</button>
        </a>
      </div>
    </div>
  );
}

export { Item };
