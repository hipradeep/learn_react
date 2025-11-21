import React, { useContext } from "react";
import { CartContext, useCart } from "./CartContext";

function Item({ name, price }) {
  //const { addToCart } = useContext(CartContext);
  const cart  = useCart();

  return (
    <div>
     <p> Item Name: {name}</p>
      Price: {price}
      <button onClick={() => cart.addToCart({ name, price })}>
        Add To Cart
      </button>
    </div>
  );
}

export default Item;
