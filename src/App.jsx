import { CartProvider} from "use-cart"
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
    <CartProvider>
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
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
      
    </CartProvider>
    
  );
}

export default App;