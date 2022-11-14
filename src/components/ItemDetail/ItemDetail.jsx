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
        <p>{movie.description}</p>
        <h4 className="priceTag"></h4>
        <a className="add-to-cart">
          <button>add to cart for U$D{movie.price}</button>
        </a>
      </div>
    </div>
  );
}

export { ItemDetail };
