import React, { useState } from 'react';
import useFetchData from '../hook/useFetchData';   // adjust path if needed
import "../App.css";   // keep your custom styles if any

function Shop() {
  // ---------- Cart & Wishlist ----------
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.title} added to cart!`);
  };

  const addToWishlist = (product) => {
    setWishlist((prev) => [...prev, product]);
    alert(`${product.title} added to wishlist!`);
  };

  // ---------- Data ----------
  const { products, loading, error } = useFetchData(
    "https://fakestoreapi.com/products"
  );

  if (loading)
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="alert alert-danger text-center" role="alert">
        Error: {error}
      </div>
    );

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fw-bold">Shop</h1>

      {/* Optional counts */}
      <div className="text-center mb-4">
        <span className="badge bg-primary me-3">Cart: {cart.length}</span>
        <span className="badge bg-secondary">Wishlist: {wishlist.length}</span>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card h-100 shadow-sm hover-shadow">
              <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-truncate">{product.title}</h5>
                <p className="card-text text-success fw-bold mb-3">
                  ${product.price}
                </p>

                <div className="mt-auto d-flex gap-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="btn btn-danger flex-fill"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => addToWishlist(product)}
                    className="btn btn-outline-secondary flex-fill"
                  >
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;