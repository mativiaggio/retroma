import "./ItemListContainer.scss";
import { Item } from "./Item";
import movies from "../../data/data";

function ItemListContainer(props) {
  return (
    <div className="container-fluid section1" id="movies">
      <div className="row">
        <div className="shop-title">
          <h1>{props.title}</h1>
        </div>
        {movies.map((movie) => {
          return (
            <div className="col-lg-2" style={{ marginBottom: `10px` }}>
              <Item
                imglocal={movie.imglocal}
                title={movie.title}
                descr={movie.description}
                price={movie.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { ItemListContainer };
