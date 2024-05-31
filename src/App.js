import React from 'react';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import './components/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Register from './components/Register';
import Login from './components/Login';
import Contact from './components/Contact';
import ForgotPassword from './components/ForgotPassword';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <div className="content">
        <Routes>
          <Route exact path="/e-commerce-app" element={<Home />} />
          <Route exact path="/e-commerce-app/products" element={<Products />} />
          <Route exact path="/e-commerce-app/products/:id" element={<Product />} />
          <Route exact path="/e-commerce-app/about" element={<About />} />
          <Route exact path="/e-commerce-app/contact" element={<Contact />} />
          <Route exact path="/e-commerce-app/cart" element={<Cart />} />
          <Route path="/e-commerce-app/checkout" element={<Checkout />} />
          <Route exact path="/e-commerce-app/register" element={<Register />} />
          <Route exact path="/e-commerce-app/login" element={<Login />} />
          <Route exact path="/e-commerce-app/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;
