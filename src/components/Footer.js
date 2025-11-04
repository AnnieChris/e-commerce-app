import React from "react";

const Footer = () => {
  return (
    <footer style={{ textAlign: "center", marginTop: "20px" }}>
      <hr />
      <p>&copy; {new Date().getFullYear()} E-Commerce App</p>
    </footer>
  );
};

export default Footer;
