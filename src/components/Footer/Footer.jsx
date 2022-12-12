import "./Footer.scss";

function Footer(props) {
  return (
    <div className="footer-container">
      <div className="footer-title">
        <h1>{props.title}</h1>
      </div>
      <div className="footer-content">
        <p>{props.copyright}</p>
      </div>
    </div>
  );
}

export { Footer };
