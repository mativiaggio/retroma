import "./ItemDetail.scss";

function ItemDetail({ movie }) {
  return (
    <div
      className="movie-page"
      style={{
        backgroundImage: `url("../../assets/movies/wallpapers/${movie.imglocal}")`,
      }}
    >
      <div className="detail-container">
        <h2>{movie.title}</h2>
        <div className="stats">
          <p>{movie.year}</p>
          <p>{movie.duration}</p>
          <p className="imdb">{movie.rating}</p>
        </div>
        <p>{movie.description}</p>
        <div className="stars">
          <h5>Stars:</h5>
          <p>{movie.stars}</p>
        </div>
        <h4 className="priceTag"></h4>
        <a className="add-to-cart">
          <button>add to cart for U$D{movie.price}</button>
        </a>
      </div>
    </div>
  );
}

export { ItemDetail };
