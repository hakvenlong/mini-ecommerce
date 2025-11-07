import React from "react";
import { useCart } from "use-cart";
import { Link } from "react-router-dom";
import useFetchData from "../hook/useFetchData";

const CartLineItem = ({ item, product }) => { 
  return (
    <div className="d-flex align-items-center justify-content-between p-3 border rounded mb-2 bg-light">
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "60px", height: "60px", objectFit: "contain" }}
        className="rounded"
      />
      <div className="flex-grow-1 ms-3">
        <strong className="d-block text-truncate" style={{ maxWidth: "180px" }}>
          {product.title}
        </strong>
        <small className="text-muted">${product.price.toFixed(2)}</small>
      </div>

      <div className="d-flex align-items-center gap-2">
        <span className="fw-bold px-3">Qty : {item.quantity}</span>
      </div>
    </div>
  );
};

export default function Checkout() {
  const { items, clearCart} = useCart();
  const { products } = useFetchData("https://fakestoreapi.com/products");

  // Match cart items with full product data
  const cartWithProducts = items
    .map((cartItem) => {
      const product = products.find((p) => p.id === Number(cartItem.sku));
      return product ? { cartItem, product } : null;
    })
    .filter(Boolean);

  // Calculations
  const subtotal = cartWithProducts
    .reduce((sum, { cartItem, product }) => sum + product.price * cartItem.quantity, 0)
    .toFixed(2);

  const shipping = items.length > 0 ? 2.0 : 0;
  const total = (parseFloat(subtotal) + shipping).toFixed(2);

  const isCartEmpty = items.length === 0;

  return (
    <main className="container my-5">
      <h2 className="mb-4 fw-bold text-center text-primary">Checkout</h2>

      {isCartEmpty ? (
        <div className="alert alert-info text-center">
          Your cart is empty. <Link to="/">Continue shopping</Link>.
        </div>
      ) : (
        <div className="row" id="checkout-content">
          {/* === LEFT: Forms === */}
          <div className="col-lg-8">
            {/* Shipping Information */}
            <div className="card mb-4 shadow-sm">
              <div className="card-body p-4">
                <h4 className="card-title mb-4 fw-bold">Shipping Information</h4>
                <form id="shipping-form">
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="123 Main St, Phnom Penh"
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="city" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="Phnom Penh"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phoneNumber" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phoneNumber"
                        placeholder="+855 12 345 678"
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Payment Information */}
            <div className="card mb-4 shadow-sm">
              <div className="card-body p-4">
                <h4 className="card-title mb-4 fw-bold text-primary">
                  Payment Information
                </h4>
                <form id="payment-form">
                  <div className="bg-light rounded-3 p-4">
                    {/* Cash on Delivery */}
                    <div className="form-check p-3 bg-white rounded shadow-sm d-flex align-items-center mb-3">
                      <input
                        className="form-check-input me-3"
                        type="radio"
                        name="paymentMethod"
                        id="payDelivery"
                        defaultChecked
                      />
                      <label className="form-check-label fw-medium" htmlFor="payDelivery">
                        Cash on Delivery
                      </label>
                    </div>

                    {/* QR Payment */}
                    <div className="form-check p-3 bg-white rounded shadow-sm d-flex align-items-center">
                      <input
                        className="form-check-input me-3"
                        type="radio"
                        name="paymentMethod"
                        id="payQR"
                      />
                      <label
                        className="form-check-label fw-medium d-flex align-items-center"
                        htmlFor="payQR"
                      >
                        Pay with KHQR or ABA
                        <span className="ms-3 d-flex gap-2">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/b/bb/KHQR_Logo.png"
                            alt="KHQR"
                            style={{ width: "48px", height: "48px", objectFit: "contain" }}
                            className="border rounded p-1 bg-white shadow-sm"
                          />
                          <img
                            src="https://play-lh.googleusercontent.com/WU6sZMD1UspzwqYnlACtmN60rckp8hoINSgsR21mKLJBbsHPwXtzwvOocpjC7FcO1g"
                            alt="ABA"
                            style={{ width: "48px", height: "48px", objectFit: "contain" }}
                            className="border rounded p-1 bg-white shadow-sm"
                          />
                        </span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* === RIGHT: Order Summary === */}
          <div className="col-lg-4">
            <div className="card shadow-sm sticky-top" style={{ top: "1rem" }}>
              <div className="card-body">
                <h4 className="card-title mb-4">Order Summary</h4>

                {/* Cart Items */}
                <div className="mb-4">
                  {cartWithProducts.map(({ cartItem, product }) => (
                    <CartLineItem
                      key={cartItem.sku}
                      item={cartItem}
                      product={product}
                    />
                  ))}
                </div>

                <hr />

                <div className="text-end">
                  <p className="mb-1">
                    <strong>Subtotal:</strong> ${subtotal}
                  </p>
                  <p className="mb-1">
                    <strong>Shipping:</strong> ${shipping.toFixed(2)}
                  </p>
                  <h4 className="text-primary">
                    <strong>Total: ${total}</strong>
                  </h4>

                  <button
                    className="btn btn-success w-100 mt-3"
                    id="place-order-btn"
                    disabled={isCartEmpty}
                    onClick={() => {
                      alert("Order placed! (Demo)");
                      clearCart();
                    }}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}