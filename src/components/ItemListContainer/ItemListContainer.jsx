import { useState, useEffect } from "react";

import "./ItemListContainer.scss";
import { Item } from "./Item";
import getItems from "../../Services/mockService";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const imgpath = props.imgpath;
  const [movies, setMovies] = useState([]);
  const { idCategory } = useParams();

  async function getItemsAsync() {
    let response = await getItems(idCategory);
    setMovies(response);
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);

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
                key={movie.id}
                imglocal={movie.imglocal}
                title={movie.title}
                descr={movie.description}
                price={movie.price}
                id={movie.id}
                imgpath={imgpath}
                year={movie.year}
                rating={movie.rating}
                duration={movie.duration}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { ItemListContainer };
