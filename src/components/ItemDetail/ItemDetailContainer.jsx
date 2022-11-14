import { useState, useEffect } from "react";
import { getSingleItem } from "../../Services/mockService";
import { ItemDetail } from "./ItemDetail";

import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [movie, setMovie] = useState([]);
  /* const paramsUrl = useParams();
  const id = paramsUrl.id; */
  const { id } = useParams();
  console.log(useParams());

  async function getItemsAsync() {
    let response = await getSingleItem(id);
    setMovie(response);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);
  console.log(movie);
  return <ItemDetail movie={movie} />;
}
export { ItemDetailContainer };
