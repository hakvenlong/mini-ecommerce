import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "use-cart";
import useFetchData from "../hook/useFetchData";

export default function Products() {
  const { addItem } = useCart();
  const { products, loading, error } = useFetchData("https://fakestoreapi.com/products");

  const handleAdd = (product) => {
    addItem(String(product.id)); 
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

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fw-bold">Shop</h1>

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
                <p>
                  Rating: {product.rating.rate} | In stock: {product.rating.count}
                </p>

                <div className="mt-auto d-flex gap-2">
                  <button
                    type="button" class="btn btn-primary" id="liveToastBtn"
                    onClick={() => handleAdd(product)}
                  >
                    Add to Cart
                  </button>
                  <Link
                    to={`/productdetail/${product.id}`}
                    className="btn btn-outline-secondary flex-fill"
                  >
                    More Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}