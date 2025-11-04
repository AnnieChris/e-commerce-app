import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ product }) {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h4>{product.title}</h4>
      <button onClick={() => removeFromCart(product.id)}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
