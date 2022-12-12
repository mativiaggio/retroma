import { useContext } from "react";
import { cartContext } from "../../../context/cartContext";
import "./CartWidget.scss";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const miContext = useContext(cartContext);
  return (
    <>
      <li className="nav-item cart-widget-container">
        <div className="cart-items">
          <p>{miContext.itemsInCart()}</p>
        </div>
        {/* <a className="nav-link cart active" aria-current="page" href="#shop">
          <i className="bi bi-bag-check"></i>
        </a> */}
        <Link className="nav-link cart active" aria-current="page" to="/cart">
          <i className="bi bi-bag-check"></i>
        </Link>
      </li>
    </>
  );
}
