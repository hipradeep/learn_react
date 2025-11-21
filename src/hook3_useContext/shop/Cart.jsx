import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { items } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map((a, i) => (
          <li key={i}>
            Item Name: {a.name}
            Price: {a.price}
          </li>
        ))}
      </ul>

      <p>Total: ₹{items.reduce((acc, item) => acc + item.price, 0)}</p>
    </div>
  );
};

export default Cart;
