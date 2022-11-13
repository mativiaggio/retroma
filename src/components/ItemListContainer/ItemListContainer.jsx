import { useState, useEffect } from "react";

import "./ItemListContainer.scss";
import { Item } from "./Item";
import getItems from "../../Services/mockService";

function ItemListContainer(props) {
  const [movies, setMovies] = useState([]);

  async function getItemsAsync() {
    let response = await getItems();
    setMovies(response);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return (
    <div className="container-fluid section1" id="movies">
      <div className="row">
        <div className="shop-title">
          <h1>{props.title}</h1>
        </div>
        {movies.map((movie) => {
          return (
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              style={{ marginBottom: `10px` }}
            >
              <Item
                imglocal={movie.imglocal}
                title={movie.title}
                descr={movie.description}
                price={movie.price}
                id={movie.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { ItemListContainer };
