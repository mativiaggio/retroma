import movies from "../data/data";

function getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(movies);
      }, 2000);
    });
  }
  
  export function getSingleItem(idParam) {
    return new Promise((resolve, reject) => {
      let itemRequested = movies.find((item) => item.id === Number(idParam));
  
      if (itemRequested === undefined) reject("ERROR 404 Not Found");
  
      setTimeout(() => {
        resolve(itemRequested);
      }, 2000);
    });
  }

  export default getItems;