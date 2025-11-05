// src/pages/Cart.jsx
import React from "react";
import { useCart } from "use-cart";
import useFetchData from "../hook/useFetchData";

const CartLineItem = ({ item, product }) => {
  const { addItem, removeItem, removeLineItem } = useCart();

  return (
    <div className="d-flex align-items-center justify-content-between p-2 border rounded mb-2">
      <div>
        <strong>{product.title}</strong> ${product.price}
      </div>

      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-sm btn-outline-danger" onClick={() => removeItem(item.sku)}>
          –
        </button>
        <span>{item.quantity}</span>
        <button className="btn btn-sm btn-outline-success" onClick={() => addItem(item.sku)}>
          +
        </button>
        <button className="btn btn-sm btn-danger" onClick={() => removeLineItem(item.sku)}>
          X
        </button>
      </div>
    </div>
  );
};

export default function Cart() {
  const { items, clearCart, lineItemsCount } = useCart();
  const { products } = useFetchData("https://fakestoreapi.com/products");

  // Map cart items → full product objects
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
              <button className="btn btn-primary ms-3" onClick={() => console.log(items)}>
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}