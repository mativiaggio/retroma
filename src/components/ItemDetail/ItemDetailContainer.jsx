import { useState, useEffect } from "react";
import { getSingleItem } from "../../Services/mockService";
import { ItemDetail } from "./ItemDetail";

function ItemDetailContainer() {
  const [movie, setMovie] = useState([]);

  async function getItemsAsync() {
    let response = await getSingleItem();
    setMovie(response);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return <ItemDetail movie={movie} />;
}

export { ItemDetailContainer };
