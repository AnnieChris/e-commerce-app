import React, { useState } from "react";
import Modal from "react-modal";
import { Alert, Button } from "react-bootstrap";

Modal.setAppElement("#root");

const QuickViewModal = ({
  isOpen,
  onRequestClose,
  product,
  addToCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
  cart,
  wishlist
}) => {
  const [message, setMessage] = useState("");

  if (!product) return null;

  const inCart = cart?.some(item => item.id === product.id);
  const inWishlist = wishlist?.some(item => item.id === product.id);

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 2000); // disappears after 2 seconds
  };

  const handleCartClick = () => {
    if (inCart) {
      removeFromCart(product.id);
      showMessage(`${product.title} removed from cart!`);
    } else {
      addToCart(product);
      showMessage(`${product.title} added to cart!`);
    }
  };

  const handleWishlistClick = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
      showMessage(`${product.title} removed from wishlist!`);
    } else {
      addToWishlist(product);
      showMessage(`${product.title} added to wishlist!`);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Quick View"
      style={{
        overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
        content: { maxWidth: "500px", margin: "auto", padding: "20px", textAlign: "center", position: "relative" }
      }}
    >
      <button
        onClick={onRequestClose}
        style={{
          position: "absolute", top: "10px", right: "10px",
          padding: "5px 10px", cursor: "pointer", background: "red", color: "white",
          border: "none", borderRadius: "3px"
        }}
      >
        X
      </button>

      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: "200px", height: "200px", objectFit: "contain" }} />
      <p>${product.price}</p>
      <p>{product.description}</p>

      <div style={{ marginTop: "20px" }}>
        <Button variant={inCart ? "danger" : "primary"} onClick={handleCartClick} className="me-2">
          {inCart ? "Remove from Cart" : "Add to Cart"}
        </Button>

        <Button variant={inWishlist ? "danger" : "secondary"} onClick={handleWishlistClick}>
          {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </Button>
      </div>

      {message && <Alert variant="success" className="mt-3">{message}</Alert>}
    </Modal>
  );
};

export default QuickViewModal;
