import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useCart } from "use-cart";
import useFetchData from "../../hook/useFetchData";
import { ToastContainer, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import { FaCartPlus , FaInfoCircle   } from "react-icons/fa";

export default function Products() {

  const [ product, setProducts] = useState(()=>{
    const saveCount = localStorage.getItem('myCount');
    return saveCount ? JSON.parse(saveCount) : [];
  });

  useEffect(() => {
    localStorage.setItem('myCount', JSON.stringify(product));
  });

  const { addItem } = useCart();
  const { products, loading, error } = useFetchData("https://fakestoreapi.com/products");

  const handleAdd = (product) => {
    addItem(String(product.id));
    toast(`${product.title} added to cart!`);
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
                  <Button variant="outline-warning" id="liveToastBtn"
                    onClick={() => handleAdd(product)}
                  >
                    Add to Cart <FaCartPlus />
                  </Button>
                  <Link
                    to={`/productdetail/${product.id}`}
                  >
                    <Button variant="outline-success">More Detail <FaInfoCircle /></Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}