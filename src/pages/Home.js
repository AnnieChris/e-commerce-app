import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { Container, Row, Col, Card, Button, Badge, Form } from "react-bootstrap";
import QuickViewModal from "../pages/QuickViewModal";
import HomeSlider from "../components/HomeSlider";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");          // NEW
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(res => setProducts(res.data));
    axios.get("https://fakestoreapi.com/products/categories").then(res => setCategories(res.data));
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  // Filter
  let filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : [...products];

  // Sort
  if (sortOption === "priceLowHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHighLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "nameAZ") {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === "nameZA") {
    filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  return (
    <>
      <HomeSlider />
      <Container className="my-4">
        <Row className="mb-3">
          <Col md={4}>
            <Form.Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </Form.Select>
          </Col>

          <Col md={4} className="ms-auto">
            <Form.Select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
              <option value="nameAZ">Name: A → Z</option>
              <option value="nameZA">Name: Z → A</option>
            </Form.Select>
          </Col>
        </Row>

        <Row>
          {filteredProducts.map(product => {
            const inCart = cart.some(item => item.id === product.id);
            const inWishlist = wishlist.some(item => item.id === product.id);

            return (
              <Col md={3} className="mb-4" key={product.id} id="products">
                <Card className="h-100 text-center">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    className="product-card-img"
                    style={{ height: "150px", objectFit: "contain", cursor: "pointer" }}
                    onClick={() => openModal(product)}
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>

                    {inCart && <Badge bg="success" className="mb-2">In Cart</Badge>}
                    {inWishlist && <Badge bg="warning" className="mb-2">Wishlist</Badge>}

                    <div className="d-flex flex-column gap-2">
                      <div className="col-12">
                        <Button
                          variant={inWishlist ? "danger" : "outline-secondary"}
                          onClick={() =>
                            inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)
                          }
                        >
                          {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                        </Button>

                        <Button
                          variant="outline-info"
                          onClick={() => openModal(product)}
                        >
                          Quick View
                        </Button>
                      </div>

                      <Button
                        variant={inCart ? "danger" : "primary"}
                        onClick={() =>
                          inCart ? removeFromCart(product.id) : addToCart({ ...product, quantity: 1 })
                        }
                      >
                        {inCart ? "Remove from Cart" : "Add to Cart"}
                      </Button>

                      <Link to={`/product/${product.id}`} className="btn btn-outline-success">
                        View Details
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        {selectedProduct && (
          <QuickViewModal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            product={selectedProduct}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            addToWishlist={addToWishlist}
            removeFromWishlist={removeFromWishlist}
            cart={cart}
            wishlist={wishlist}
          />
        )}
      </Container>
    </>
  );
};

export default Home;
