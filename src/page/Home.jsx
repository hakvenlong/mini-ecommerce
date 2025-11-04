import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import "../App.css"

// const [products, setProducts] = useState([]);

// useEffect(() => {
//   async function fetchData() {
//     try {
//       const { data } = await axios.get("https://fakestoreapi.com/products");
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   }

//   fetchData();
// }, []);



function Home() {
  return (
    <div className="shop-container">
      <h1>Shop</h1>
        {/* {products.map(product => (
          <div key={product.id}>
            <div className="product-card">
              <img src={product.image} alt={product.title} width="100" />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          </div>
        ))} */}
    </div>
  );
} 

export default Home;
