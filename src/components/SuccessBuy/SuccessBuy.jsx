import React from "react";
import { useParams } from "react-router-dom";
import "./SuccessBuy.scss";
import Cta from "../Header/CallToAction/CallToAction";
import { Link } from "react-router-dom";
function SuccessBuy() {
  const idOrder = useParams().idOrder;
  return (
    <div className="checkout-message">
      <div className="checkout-screen">
        <h1>Thanks for chosing us!</h1>
        <h3>
          You can use this order number to keep track of your products:
          <br />
          <strong>{idOrder}</strong>
        </h3>
        <div className="back-buttons">
          <button className="cta-button">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </button>
          <Cta />
        </div>
      </div>
    </div>
  );
}

export default SuccessBuy;
