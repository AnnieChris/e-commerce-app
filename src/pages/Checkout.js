import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  if (cart.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Your cart is empty!</h2>
        <Link to="/e-commerce-app">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc" }}>#</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Product</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Price</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Quantity</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Subtotal</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td style={{ padding: "10px" }}><img src={item.image} alt={item.title} width="20" /></td>
              <td style={{ padding: "10px" }}>{item.title}</td>
              <td style={{ padding: "10px" }}>${item.price}</td>
              <td style={{ padding: "10px" }}>{item.quantity || 1}</td>
              <td style={{ padding: "10px" }}>
                ${(item.price * (item.quantity || 1)).toFixed(2)}
              </td>
              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => removeFromCart(item)}
                  style={{ padding: "5px 10px" }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total: ${totalPrice.toFixed(2)}</h3>

      <button
        onClick={() => {
          alert("Order placed successfully!");
          clearCart();
        }}
        style={{ padding: "10px 20px", marginTop: "20px" }}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
