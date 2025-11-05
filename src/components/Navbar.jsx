import React from 'react';
import { Link } from 'react-router-dom';
// import Shop from '../page/Shop'; 
import logo from "../assets/logo.png"

function Navbar() {
  return (
    <>
      <header className="navbar navbar-expand-lg navbar-light sticky-top bg-white shadow-sm">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              className="img-fluid"
              style={{ height: '50px' }} // Fixed: object syntax
            />
          </Link>

          {/* Toggler */}
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

          {/* Collapsible Navbar */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Main Nav Links (Centered) */}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Search Bar – Visible on larger screens */}
            <form className="d-flex d-lg-flex search-bar">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search products..."
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit" aria-label="Search">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </header>
      <div className="navbar navbar-expand mb-4 bg-light">
        <div className="container">
          {/* Right-aligned icon links */}
          <ul className="navbar-nav ms-auto right-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/account">
                <i className="bi bi-person"></i> Account
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i className="bi bi-cart"></i> Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">
                <i className="bi bi-bag-check"></i> Checkout
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/login">
                <i className="bi bi-lock"></i> Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;