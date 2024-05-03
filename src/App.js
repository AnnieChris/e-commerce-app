import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'; 
import './components/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/ecommerce-app" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
