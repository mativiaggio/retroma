import { useState } from "react";
import "./CartForm.scss";

export default function CartForm(props) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onInputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;

    // dynamic properties
    let newData = { ...data };
    newData[nameInput] = value;
    setData(newData);
  }

  function onSubmit(evt) {
    if (data.name.length === 0) return;

    evt.preventDefault();
    props.onSubmit(evt, data);
  }

  return (
    <>
      <h1 className="checkout-title">Complte de form to checkout</h1>
      <form onSubmit={onSubmit}>
        {/* Podriamos convertir los inputs en Componentes */}
        <div className="input-div">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="John Doe"
            aria-label="Full name"
            required
            value={data.name}
            name="name"
            onChange={onInputChange}
          ></input>
        </div>

        <div className="input-div">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            value={data.email}
            name="email"
            onChange={onInputChange}
            placeholder="johndoe@mail.com"
          ></input>
        </div>

        <div className="input-div">
          <label htmlFor="phone">Phone number</label>
          <input
            className="form-control"
            placeholder="+54 9 11 123456"
            aria-label="Full name"
            required
            value={data.phone}
            name="phone"
            type="phone"
            onChange={onInputChange}
          ></input>
        </div>
        <div className="checkout-button">
          <button
            className="cta-button"
            disabled={
              data.name === "" || data.phone === "" || data.email === ""
            }
            type="submit"
          >
            Checkout
          </button>
        </div>
      </form>
    </>
  );
}
