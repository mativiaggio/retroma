import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import Swal from "sweetalert2";

function ItemDetail({ movie }) {
  const { addToCart } = useContext(cartContext);

  function onAddToCart(count) {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    if (count > 1) {
      Toast.fire({
        icon: "success",
        title: `You've added ${count} movie tickets to the cart`,
      });
    } else {
      Toast.fire({
        icon: "success",
        title: `You've added ${count} movie ticket to the cart`,
      });
    }
    /* setState(count) */
    addToCart(movie, count);
  }

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
        <ItemCount
          onAddToCart={onAddToCart}
          stock={movie.stock}
          price={movie.price}
        />
        {/* <div>Total ${priceInCart()}</div> */}
      </div>
    </div>
  );
}

export { ItemDetail };
