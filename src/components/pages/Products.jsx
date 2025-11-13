// src/pages/Products.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "use-cart";
import useFetchData from "../../hook/useFetchData";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import { FaCartPlus, FaInfoCircle, FaStar } from "react-icons/fa";

function Products() {
  // Optional: keep localStorage count (e.g. for wishlist)
  const [savedCount] = useState(() => {
    const saved = localStorage.getItem("myCount");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("myCount", JSON.stringify(savedCount));
  }, [savedCount]);

  const { addItem, items, lineItemsCount } = useCart();
  const { products, loading, error } = useFetchData("https://fakestoreapi.com/products");

  // Merge cart items with product data for price total
  const cartWithProducts = items
    .map((cartItem) => {
      const product = products.find((p) => p.id === Number(cartItem.sku));
      return product ? { cartItem, product } : null;
    })
    .filter(Boolean);

  const total = cartWithProducts
    .reduce((sum, { product, cartItem }) => sum + product.price * cartItem.quantity, 0)
    .toFixed(2);

  const handleAdd = (product) => {
    addItem(String(product.id));
    toast.success(
      <div className="d-flex align-items-center gap-2">
        <FaCartPlus /> {product.title} added!
      </div>,
      { autoClose: 2000 }
    );
  };

  // Loading State
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: "50vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading products...</span>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="alert alert-danger text-center mx-auto my-5" style={{ maxWidth: "600px" }} role="alert">
        Error: {error}
      </div>
    );
  }

  return (
    <section className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h1 className="display-5 fw-bold mb-3">Shop All Products</h1>
          <p className="lead text-muted">
            {products.length} items available •
          </p>
        </div>

        {/* Product Grid */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="col"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              data-aos-anchor-placement="top-bottom"
            >
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all position-relative overflow-hidden">
                {/* Image */}
                <div className="p-3 bg-white d-flex justify-content-center align-items-center" style={{ height: "220px" }}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                    loading="lazy"
                  />
                </div>

                {/* Body */}
                <div className="card-body d-flex flex-column p-3">
                  <h5 className="card-title text-truncate mb-2" title={product.title}>
                    {product.title}
                  </h5>

                  {/* Price */}
                  <p className="card-text text-success fw-bold fs-5 mb-2">
                    ${product.price}
                  </p>

                  {/* Rating */}
                  <div className="d-flex align-items-center gap-1 text-warning small mb-3">
                    <FaStar />
                    <span>{product.rating.rate}</span>
                    <span className="text-muted ms-1">({product.rating.count} reviews)</span>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto d-flex gap-2">
                    <Button
                      variant="primary"
                      size="sm"
                      className="flex-fill d-flex align-items-center justify-content-center gap-1"
                      onClick={() => handleAdd(product)}
                      aria-label={`Add ${product.title} to cart`}
                    >
                      <FaCartPlus /> Add
                    </Button>
                    <Link to={`/productdetail/${product.id}`} className="flex-fill">
                      <Button
                        variant="outline-success"
                        size="sm"
                        className="w-100 d-flex align-items-center justify-content-center gap-1"
                        aria-label={`View details of ${product.title}`}
                      >
                        <FaInfoCircle /> Detail
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Optional: Sale Badge */}
                {product.price < 50 && (
                  <span className="position-absolute top-0 start-0 m-2 badge bg-danger">SALE</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;