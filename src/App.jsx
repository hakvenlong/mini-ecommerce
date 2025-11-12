import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { CartProvider} from "use-cart"
import React from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Product from './components/pages/Products';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout'; 
import LoginAcc from './components/pages/LoginAcc';
import Error from './components/pages/Error';
import ProductDetail from './components/pages/ProductDetail';
import Register from './components/pages/Register';


function App() {

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<LoginAcc />} />
          <Route path="/register" element={<Register />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
      
    </CartProvider>
    
  );
}

export default App;