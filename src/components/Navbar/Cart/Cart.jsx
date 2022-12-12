import "./Cart.scss";
import React, { useContext } from "react";
import { cartContext } from "../../../context/cartContext";
import Cta from "../../Header/CallToAction/CallToAction";
import CartForm from "./CartForm";
import {
  createOrder,
  exportArrayToFirestore,
} from "../../../Services/firestore";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeItem, clear, priceInCart } = useContext(cartContext);
  let navigate = useNavigate();

  function handleExport() {
    exportArrayToFirestore();
  }

  if (cart.length === 0) {
    return (
      <div className="cart-body-container">
        <div className="cart-container cart-body container-fluid">
          <h1 className="empty-cart-h1">HEY! The cart is empty.</h1>
          <Cta />
          {/* ↓↓↓  SE USA SOLO PARA IMPORTAR ARRAY DE OBJETOS COMO DOCUMENTOS A FIRESTORE ↓↓↓  */}
          {/* <button onClick={handleExport}>Borrar despues de usar</button> */}
        </div>
      </div>
    );
  } else {
    async function handleCheckout(evt, data) {
      // Crear nuestro objeto "orden de compra"
      const order = {
        buyer: data,
        items: cart,
        total: 0,
        date: new Date(),
      };

      const orderId = await createOrder(order);
      navigate(`/successful-purchase/${orderId}`);
      clear();
    }
    return (
      <div className="cart-body-container">
        <div className="cart-container cart-body container-fluid">
          <div className="row cart-row">
            {cart.map((item) => (
              <div key={item.id} className="cart-item col-lg-12">
                <img
                  src={`../../assets/movies/${item.imglocal}`}
                  alt={item.title}
                />
                <div className="item-details">
                  <h2>{item.title}</h2>
                  <h5>Price: ${item.price}</h5>
                  <h5>Units: {item.count}</h5>
                  <h5>Subtotal: ${(item.price * item.count).toFixed(2)}</h5>
                  <button
                    className="cta-button"
                    onClick={() => removeItem(item.id)}
                  >
                    Delete item
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="total-container">
            <div className="total-value">Total ${priceInCart()}</div>
          </div>
          <div className="buy-button-container">
            <button className="cta-button empty-cart-btn" onClick={clear}>
              Empty cart
            </button>
          </div>
          <CartForm onSubmit={handleCheckout} />
        </div>
      </div>
    );
  }
}

export { Cart };
