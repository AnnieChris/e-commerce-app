import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? <p>Your wishlist is empty.</p> : (
        <div>
          {wishlist.map(item => (
            <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} width="100" />
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
              <button onClick={() => removeFromWishlist(item.id)} style={{ marginLeft: "10px" }}>Remove</button>
            </div>
          ))}
          <button onClick={clearWishlist} style={{ marginTop: "10px" }}>Clear Wishlist</button>
          <Link to="/cart"><button style={{ marginLeft: "10px" }}>Go to Cart</button></Link>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
