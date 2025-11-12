import React from 'react';  
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { useCart } from "use-cart";   
import useFetchData from "../../hook/useFetchData";
import Badge from 'react-bootstrap/Badge';

function Navbar() {
  const { items,lineItemsCount } = useCart();

  // 2. Load products (same as before)
  const { products } = useFetchData("https://fakestoreapi.com/products");

  // 3. Match cart items with real products (use `id`, not `sku`)
  const cartWithProducts = items
    .map((cartItem) => {
      const product = products.find((p) => p.id === Number(cartItem.id));
      return product ? { cartItem, product } : null;
    })
    .filter(Boolean);

  // 4. Calculate subtotal (same variable name: `total`)
  const total = cartWithProducts
    .reduce((sum, { cartItem, product }) => sum + product.price * cartItem.quantity, 0)
    .toFixed(2);

  // 5. Total quantity for badge (using `lineItemsCount.items` or just `items`)
  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Top Navbar */}
      <header className="navbar navbar-expand-lg navbar-light sticky-top bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" style={{ height: '50px' }} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>

            <form className="d-flex d-lg-flex search-bar">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search products..."
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Bottom Mini-Bar */}
      <div className="navbar navbar-expand mb-4 bg-light">
        <div className="container">
          <ul className="navbar-nav ms-auto right-nav">
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart">
                Cart
                {totalQty > 0 && (
                  <>
                    <Badge bg="danger" className="ms-1">
                      {totalQty}
                    </Badge>
                    <small className="text-muted ms-2">${total}</small>
                  </>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">
                Checkout
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;