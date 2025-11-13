// src/pages/ProductDetail.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "use-cart";
import useFetchData from "../../hook/useFetchData";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { FaCartPlus, FaStar, FaArrowLeft } from "react-icons/fa";

function ProductDetail() {
  const { id } = useParams();
  const { addItem, lineItemsCount } = useCart();

  // Fetch **only** the product by ID
  const { products: product, loading, error } = useFetchData(
    `https://fakestoreapi.com/products/${id}`
  );

  const handleAdd = () => {
    if (!product) return;
    addItem(String(product.id));
    toast.success(
      <div className="d-flex align-items-center gap-2">
        <FaCartPlus /> {product.title} added to cart!
      </div>,
      { autoClose: 2000 }
    );
  };

  // Loading
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: "60vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading product...</span>
        </div>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="alert alert-danger text-center mx-auto my-5" style={{ maxWidth: "600px" }} role="alert">
        Error loading product: {error}
      </div>
    );
  }

  // Not found
  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Product not found</h2>
        <Link to="/product">
          <Button variant="primary" className="mt-3">
            <FaArrowLeft className="me-2" /> Back to Shop
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <section className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/product">Shop</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product.title.length > 30 ? `${product.title.substring(0, 30)}...` : product.title}
            </li>
          </ol>
        </nav>

        <div className="row g-5">
          {/* Image */}
          <div className="col-lg-6 text-center" data-aos="fade-right" data-aos-delay="100">
            <div className="bg-white p-4 rounded shadow-sm">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
                style={{
                  maxHeight: "500px",
                  objectFit: "contain",
                  borderRadius: "0.5rem",
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Details */}
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <h1 className="h3 fw-bold mb-3">{product.title}</h1>

            {/* Price */}
            <p className="text-success fw-bold fs-3 mb-3">${product.price}</p>

            {/* Rating */}
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="d-flex text-warning">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < Math.round(product.rating.rate) ? "text-warning" : "text-muted"}
                    style={{ opacity: i < Math.round(product.rating.rate) ? 1 : 0.3 }}
                  />
                ))}
              </div>
              <span className="text-muted small">
                {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-muted mb-4" style={{ lineHeight: 1.6 }}>
              {product.description}
            </p>

            {/* Actions */}
            <div className="d-flex flex-column flex-sm-row gap-3">
              <Button
                variant="primary"
                size="lg"
                className="d-flex align-items-center justify-content-center gap-2 flex-fill"
                onClick={handleAdd}
                style={{
                  backgroundColor: "var(--color-primary)",
                  borderColor: "var(--color-primary)",
                }}
                aria-label={`Add ${product.title} to cart`}
              >
                <FaCartPlus /> Add to Cart
                {lineItemsCount > 0 && (
                  <Badge bg="light" text="dark" className="ms-2">
                    {lineItemsCount}
                  </Badge>
                )}
              </Button>

              <Link to="/product" className="flex-fill">
                <Button
                  variant="outline-secondary"
                  size="lg"
                  className="w-100 d-flex align-items-center justify-content-center gap-2"
                >
                  <FaArrowLeft /> Back to Shop
                </Button>
              </Link>
            </div>

            {/* Category Tag */}
            <div className="mt-4">
              <span className="badge bg-secondary text-capitalize">
                {product.category}
              </span>
            </div>
          </div>
        </div>

        {/* Toast */}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          closeOnClick
          pauseOnHover
          theme="light"
        />
      </div>
    </section>
  );
}

export default ProductDetail;