// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./page/Home"
import Contact from "./page/Contact"
import Shop from "./page/Shop"
import Cart from './page/Cart';
import Account from './page/Acc';
import Checkout from './page/Checkout';
import LoginAcc from './page/LoginAcc';
import Error from './page/Error';
import ProductDetail from './page/ProductDetail';


function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<LoginAcc />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;