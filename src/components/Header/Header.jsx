import Cta from "./CallToAction/CallToAction";
import "./Header.scss";
function Header(props) {
  return (
    <div className="container-fluid header-container" id="home">
      <div className="row">
        <div className="col-lg-12 col-md-12 title-container">
          <h1>{props.title}</h1>
          <Cta />
        </div>
        {/*         <div className="col-lg-6 col-md-12 image-container">
          <img alt="header" src={`assets/${props.imglocal}`}></img>
        </div> */}
      </div>
    </div>
  );
}

export { Header };
