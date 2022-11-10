function Item(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={`assets/${props.imglocal}`}
        className="card-img-top"
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.price}</p>
        <a href="#" className="btn btn-primary">
          Buy
        </a>
      </div>
    </div>
  );
}

export { Item };
