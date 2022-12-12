import React, { useState } from "react";
import "./ItemCount.scss";

function ItemCount({ stock, onAddToCart, price }) {
  let [count, setCount] = useState(1);

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  const total = count * price;

  const totalFixed = total.toFixed(2);

  return (
    <div className="itemcount_container">
      <div className="itemcount_control">
        <button className="amount-button" onClick={handleSubstract}>
          -
        </button>
        <span className="amount-count">{count}</span>
        <button className="amount-button" onClick={handleAdd}>
          +
        </button>
      </div>
      <div className="itemcount_btns">
        {/* 3. agregar un onClick con el evento recibido por Props */}
        <button className="cta-button" onClick={() => onAddToCart(count)}>
          Add to cart for ${totalFixed}
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
