import { createContext, useState } from "react";

// Creacion del context
export const cartContext = createContext();

// Provider
export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isInCart, setIsInCart] = useState(false);

  function addToCart(movie, count) {
    let itemAlreadyInCart = cart.findIndex(
      (itemInCart) => itemInCart.id === movie.id
    );

    let newCart = [...cart];

    if (itemAlreadyInCart !== -1) {
      newCart[itemAlreadyInCart].count += count;
      setCart(newCart);
    } else {
      movie.count = count;
      newCart.push(movie);

      setCart(newCart);
    }
  }

  function itemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => (total = total + itemInCart.count));
    return total;
  }

  function clear() {
    setCart([]);
  }

  function removeItem(id) {
    cart.splice(
      cart.findIndex((i) => i.id === id),
      1
    );
    setCart([...cart]);
    if (cart.length === 0) {
      setIsInCart(false);
    }
  }

  function priceInCart() {
    let total = cart.reduce((add, i) => (add += i.price * i.count), 0);
    return total.toFixed(2);
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        itemsInCart,
        clear,
        removeItem,
        priceInCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
