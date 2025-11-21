import React from "react";
import CartProvider from "./CartContext";
import Item from "./Item";
import Cart from "./Cart";

function Shop() {
  return (
    <CartProvider>
      <Item name="Apple" price={50} />
      <Item name="Mango" price={70} />
      <Cart />
    </CartProvider>
  );
}

export default Shop;
