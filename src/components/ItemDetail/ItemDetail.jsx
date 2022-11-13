import "./ItemDetail.scss";

function ItemDetail({ movie }) {
  return (
    <div className="card-detail">
      <div className="card-detail_img">
        <img src={movie.imglocal} alt="Movie img" />
      </div>
      <div className="card-detail_detail">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <h4 className="priceTag">$ {movie.price}</h4>
      </div>
    </div>
  );
}

export { ItemDetail };
