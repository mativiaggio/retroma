import { useState, useEffect } from "react";

import "./ItemListContainer.scss";
// import { Item } from "./Item";
import Item from "./Item";
import getItems, {
  getItemsByCategory,
  getItemsOrdered,
} from "../../Services/firestore";
import { useParams } from "react-router-dom";
import Loader from "../Loaders/Loader";

function ItemListContainer(props) {
  const imgpath = props.imgpath;
  const [movies, setMovies] = useState([]);
  const { idCategory } = useParams();

  // async function getItemsAsync() {
  //   let response = await getItems(idCategory);
  //   setMovies(response);
  // }
  async function getItemsAsync() {
    if (!idCategory) {
      let respuesta = await getItemsOrdered();
      setMovies(respuesta);
    } else {
      let respuesta = await getItemsByCategory(idCategory);
      setMovies(respuesta);
    }
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);

  return (
    <div className="container-fluid section1" id="movies">
      {movies.length !== 0 ? (
        <div className="row">
          <div className="shop-title">
            <h1>{props.title}</h1>
          </div>
          {movies.map((movie) => {
            return (
              <div
                className="col-lg-3 col-md-6 col-sm-12"
                style={{ marginBottom: `10px` }}
                key={movie.id}
              >
                <Item
                  key={movie.id}
                  id={movie.id}
                  imglocal={movie.imglocal}
                  title={movie.title}
                  descr={movie.description}
                  price={movie.price}
                  imgpath={imgpath}
                  year={movie.year}
                  rating={movie.rating}
                  duration={movie.duration}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export { ItemListContainer };
