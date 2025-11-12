import React, { useEffect } from "react";
import { useCart } from "use-cart";
import { Link } from "react-router-dom";
import useFetchData from "../../hook/useFetchData";

const CartLineItem = ({ item, product }) => {
  const { addItem, removeItem, removeLineItem } = useCart();

  return (
    <div className="d-flex align-items-center justify-content-between p-2 border rounded mb-2">
      <img style={{width:'50px'}} src={product.image} alt="" />
      <div className="flex-grow-1 ms-3">
        <strong className="d-block text-truncate" style={{ maxWidth: "180px" }}>
          {product.title}
        </strong>
        <small className="text-muted">${product.price.toFixed(2)} x {item.quantity}</small>
      </div>

      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-sm btn-outline-secondary" onClick={() => removeItem(item.sku)}>
          –
        </button>
        <span className="fw-bold">{item.quantity}</span>
        <button className="btn btn-sm btn-outline-secondary" onClick={() => addItem(item.sku)}>
          +
        </button>
        <button
          className="btn btn-sm btn-outline-danger ms-2"
          onClick={() => removeLineItem(item.sku)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default function Cart() {

  

  const { items, clearCart, lineItemsCount } = useCart();
  const { products } = useFetchData("https://fakestoreapi.com/products");

  const cartWithProducts = items
    .map((cartItem) => {
      const product = products.find((p) => p.id === Number(cartItem.sku));
      return product ? { cartItem, product } : null;
    })
    .filter(Boolean);

  const total = cartWithProducts
    .reduce((sum, { cartItem, product }) => sum + product.price * cartItem.quantity, 0)
    .toFixed(2);

  return (
    <div className="container py-5">
      <h1 className="mb-4">Cart ({lineItemsCount})</h1>

      {items.length === 0 ? (
        <p className="alert alert-info text-center">Your cart is empty.</p>
      ) : (
        <>
          {cartWithProducts.map(({ cartItem, product }) => (
            <CartLineItem key={cartItem.sku} item={cartItem} product={product} />
          ))}

          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-outline-danger" onClick={clearCart}>
              Clear Cart
            </button>

            <div>
              <strong>Total: ${total}</strong>
              <Link to="/checkout" className="btn btn-primary ms-3">
                Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}