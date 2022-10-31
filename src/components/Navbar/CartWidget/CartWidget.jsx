import "./CartWidget.scss";
export default function CartWidget() {
  return (
    <>
      <li className="nav-item cart-widget-container">
        <div className="cart-items">
          <p>0</p>
        </div>
        <a className="nav-link cart active" aria-current="page" href="#shop">
          <i className="bi bi-bag-check"></i>
        </a>
      </li>
    </>
  );
}
