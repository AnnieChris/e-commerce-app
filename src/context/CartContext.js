import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
  setCart(prev => {
    const exists = prev.find(p => p.id === item.id);
    if (exists) {
      // Update quantity
      return prev.map(p => p.id === item.id ? { ...p, quantity: item.quantity } : p);
    }
    return [...prev, item]; // Add new item
  });
};


  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const clearCart = () => setCart([]);

  // New function to update quantity
  const updateCartItemQuantity = (id, quantity) => {
    setCart(prev => 
      prev.map(item => item.id === id ? { ...item, quantity } : item)
    );
  };


  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, updateCartItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
