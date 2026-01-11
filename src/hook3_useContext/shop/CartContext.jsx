import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCart=() =>{
  const cart = useContext(CartContext);
  return cart;
}


const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (item) => {
    setItems((prev) => [...prev, item]);
  };

  return (
    <CartContext.Provider value={{ items, addToCart, setItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
