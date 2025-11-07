import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "use-cart";
import useFetchData from "../hook/useFetchData";

function ProductDetail() {
    const { addItem } = useCart();
    const { id } = useParams(); 

    const { products, loading, error } = useFetchData("https://fakestoreapi.com/products");
  
    const handleAdd = (product) => {
      addItem(String(product.id)); // sku = product.id as string
      alert(`${product.title} added to cart!`);
    };
  
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

    // Find the product based on the ID from the URL
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return <div className="container py-5 text-center">Product not found.</div>;
    }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid" // Make image responsive
            style={{ maxHeight: "400px", objectFit: "contain", width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">{product.title}</h2>
          <p className="text-success fw-bold fs-4 mb-3">${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <p className="mb-4"><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</p>
          <button onClick={() => handleAdd(product)} className="btn btn-primary btn-lg me-3">Add to Cart</button>
          <Link to="/shop" className="btn btn-outline-secondary btn-lg">Back to Shop</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
