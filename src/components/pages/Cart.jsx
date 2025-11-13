import React, { useState, useEffect } from "react";
import { useCart } from "use-cart";
import { Link } from "react-router-dom";
import useFetchData from "../../hook/useFetchData";

// Reusable Checkbox Component
const Checkbox = ({ label, checked, onChange, id }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      {label && (
        <label className="form-check-label" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};

// Cart Line Item (now receives selection props)
const CartLineItem = ({ item, product, isChecked, onToggle }) => {
  const { addItem, removeItem, removeLineItem } = useCart();

  return (
    <div className="d-flex align-items-center justify-content-between p-3 border rounded mb-2">
      <div className="me-3">
        <Checkbox
          id={`item-${item.sku}`}
          checked={isChecked}
          onChange={() => onToggle(item.sku)}
        />
      </div>

      <img
        src={product.image}
        alt={product.title}
        style={{ width: "50px", height: "50px", objectFit: "contain" }}
        className="me-3"
      />

      <div className="flex-grow-1 me-3">
        <strong
          className="d-block text-truncate"
          style={{ maxWidth: "180px" }}
          title={product.title}
        >
          {product.title}
        </strong>
        <small className="text-muted">
          ${product.price.toFixed(2)} × {item.quantity}
        </small>
      </div>

      <div className="d-flex align-items-center gap-2">
        <button
          className="btn btn-sm btn-outline-secondary"
          disabled={item.quantity === 1}
          onClick={() => removeItem(item.sku)}
        >
          –
        </button>
        <span className="fw-bold px-2">{item.quantity}</span>
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => addItem(item.sku)}
        >
          +
        </button>
        <button
          className="btn btn-sm btn-outline-danger ms-2"
          onClick={() => removeLineItem(item.sku)}
        >
          ×
        </button>
      </div>
    </div>
  );
};

// Main Cart Component
export default function Cart() {
  const { items, clearCart, lineItemsCount, removeLineItems } = useCart();
  const { products } = useFetchData("https://fakestoreapi.com/products");

  // Selection state
  const [selectedSkus, setSelectedSkus] = useState([]);

  // Build cart items with product data
  const cartWithProducts = items
    .map((cartItem) => {
      const product = products.find((p) => p.id === Number(cartItem.sku));
      return product ? { cartItem, product } : null;
    })
    .filter(Boolean);

  // Total price
  const total = cartWithProducts
    .reduce((sum, { cartItem, product }) => sum + product.price * cartItem.quantity, 0)
    .toFixed(2);

  // Select All logic
  const allSkus = cartWithProducts.map(({ cartItem }) => cartItem.sku);
  const isAllSelected = allSkus.length > 0 && allSkus.every((sku) => selectedSkus.includes(sku));

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedSkus([]);
    } else {
      setSelectedSkus(allSkus);
    }
  };

  const handleToggleItem = (sku) => {
    setSelectedSkus((prev) =>
      prev.includes(sku) ? prev.filter((s) => s !== sku) : [...prev, sku]
    );
  };

  // Optional: Delete selected items
  const handleDeleteSelected = () => {
    if (selectedSkus.length > 0 && window.confirm("Delete selected items?")) {
      removeLineItems(selectedSkus); // assumes your useCart supports bulk remove
      setSelectedSkus([]);
    }
  };

  if (!products.length) {
    return <div className="container py-5">Loading products...</div>;
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4">Cart ({lineItemsCount})</h1>

      {items.length === 0 ? (
        <p className="alert alert-info text-center">Your cart is empty.</p>
      ) : (
        <>
          {/* Select All Header */}
          <div className="d-flex align-items-center mb-3">
            <Checkbox
              id="selectAll"
              checked={isAllSelected}
              onChange={handleSelectAll}
              label="Select All"
            />
          </div>

          {/* Cart Items */}
          {cartWithProducts.map(({ cartItem, product }) => (
            <CartLineItem
              key={cartItem.sku}
              item={cartItem}
              product={product}
              isChecked={selectedSkus.includes(cartItem.sku)}
              onToggle={handleToggleItem}
            />
          ))}

          <hr />

          {/* Footer */}
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <button className="btn btn-outline-danger" onClick={clearCart}>
              Clear Cart
            </button>

            <div className="text-end">
              <strong className="d-block">Total: ${total}</strong>
              <Link to="/checkout" className="btn btn-primary mt-2">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 