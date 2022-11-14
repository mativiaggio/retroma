import movies from "../data/data";

function getItems(idCategory) {
  return new Promise((resolve) => {
    if (idCategory === undefined) {
      setTimeout(() => {
        resolve(movies);
      }, 500);
    } else {
      setTimeout(() => {
        let itemsRequested = movies.filter(
          (item) => item.category === idCategory
        );
        resolve(itemsRequested);
      }, 500);
    }
  });
}

export function getSingleItem(idParam) {
  return new Promise((resolve, reject) => {
    let itemRequested = movies.find((item) => item.id === Number(idParam));

    if (itemRequested === undefined) reject("ERROR 404 Not Found");

    setTimeout(() => {
      resolve(itemRequested);
    }, 500);
  });
}

export default getItems;
