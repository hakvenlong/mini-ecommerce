// src/pages/Checkout.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "use-cart";
import useFetchData from "../../hook/useFetchData";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { FaShoppingCart, FaTelegramPlane } from "react-icons/fa";

const TELEGRAM_BOT_TOKEN = "8480118774:AAGMx_JaygJ0gS9hwaR03tI-pYFfSuwaYpc"
const TELEGRAM_CHAT_ID = "@miniecommerce"

const sendTelegramMessage = async (message) => {
  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });
  } catch (err) {
    console.error("Telegram error:", err);
  }
};

const CartLineItemMini = ({ product, quantity }) => (
  <tr>
    <td className="text-center">
      <img
        src={product.image}
        alt={product.title}
        width={50}
        height={50}
        className="rounded"
        style={{ objectFit: "contain" }}
      />
    </td>
    <td className="text-start text-truncate" style={{ maxWidth: "150px" }}>
      {product.title}
    </td>
    <td>${product.price.toFixed(2)}</td>
    <td>{quantity}</td>
    <td className="fw-bold">${(product.price * quantity).toFixed(2)}</td>
  </tr>
);

function Checkout() {
  const navigate = useNavigate();
  const { items, lineItemsCount, clearCart } = useCart();
  const { products } = useFetchData("https://fakestoreapi.com/products");

  const [formData, setFormData] = useState({
    fullName: "",
    location: "",
    phoneNumber: "",
    paymentMethod: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Merge cart + products
  const cartWithProducts = items
    .map((cartItem) => {
      const product = products.find((p) => p.id === Number(cartItem.sku));
      return product ? { cartItem, product } : null;
    })
    .filter(Boolean);

  const subtotal = cartWithProducts
    .reduce((sum, { product, cartItem }) => sum + product.price * cartItem.quantity, 0)
    .toFixed(2);

  const shipping = 5.0;
  const total = (parseFloat(subtotal) + shipping).toFixed(2);

  const isCartEmpty = lineItemsCount === 0;

  // Update form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    setFormData((prev) => ({ ...prev, paymentMethod: e.target.value }));
  };

  // Submit order
  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (isCartEmpty) {
      toast.error("Your cart is empty!");
      return;
    }

    const { fullName, location, phoneNumber, paymentMethod } = formData;
    if (!fullName || !location || !phoneNumber || !paymentMethod) {
      toast.error("Please fill all fields and select payment method.");
      return;
    }

    setIsSubmitting(true);

    // Build message
    const itemsList = cartWithProducts
      .map(
        ({ product, cartItem }) =>
          `• ${product.title} × ${cartItem.quantity} = $${(
            product.price * cartItem.quantity
          ).toFixed(2)}`
      )
      .join("\n");

    const message = `
    <b>New Order</b>
    <b>============================================</b>
    <b>- Customer:</b> ${fullName}
    <b>- Location:</b> ${location}
    <b>- Phone:</b> ${phoneNumber}
    <b>- Payment:</b> ${paymentMethod === "delivery" ? "Pay on Delivery" : "ABA / KHQR"}
    <b>============================================</b>
    <b>- Items:</b>
    ${itemsList}
    <b>============================================</b>
    <b>- Subtotal:</b> $${subtotal}
    <b>- Shipping:</b> $${shipping.toFixed(2)}
    <b>- Total:</b> <b>$${total}</b>
    `.trim();

    try {
      await sendTelegramMessage(message);
      toast.success("Order sent to Telegram! (Demo mode)");
      clearCart();
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      toast.error("Failed to send order. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Empty cart UI
  if (isCartEmpty) {
    return (
      <section className="py-5" data-aos="fade-up">
        <div className="container text-center">
          <div className="alert alert-info d-inline-block p-4">
            <FaShoppingCart className="mb-3" size={48} />
            <h3>Your cart is empty</h3>
            <Link to="/product" className="btn btn-primary mt-3">
              Continue Shopping
            </Link>
          </div>
        </div>
        <ToastContainer />
      </section>
    );
  }

  return (
    <section className="py-5" data-aos="fade-up">
      <div className="container">
        <h1 className="h3 fw-bold mb-4 text-center">Checkout</h1>

        <div className="row g-5">
          {/* LEFT: Forms */}
          <div className="col-lg-8">
            <form onSubmit={handlePlaceOrder} noValidate>
              {/* Shipping */}
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title mb-4">Shipping Information</h5>

                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="location" className="form-label">
                        Location <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        placeholder="Phnom Penh, Cambodia"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phoneNumber" className="form-label">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        pattern="[0-9]{3} [0-9]{3} [0-9]{3}"
                        placeholder="012 345 678"
                      />
                      <div className="form-text">Format: 012 345 678</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title mb-4">Payment Method</h5>

                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="payOnDelivery"
                      value="delivery"
                      checked={formData.paymentMethod === "delivery"}
                      onChange={handlePaymentChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="payOnDelivery">
                      Pay on Delivery (Cash)
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="payByABA"
                      value="aba"
                      checked={formData.paymentMethod === "aba"}
                      onChange={handlePaymentChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="payByABA">
                      Pay by ABA / KHQR
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* RIGHT: Summary (Sticky on large screens) */}
          <div className="col-lg-4">
            <div className="card shadow-sm sticky-top" style={{ top: "1rem" }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-4 d-flex align-items-center gap-2">
                  <FaShoppingCart /> Order Summary
                  <Badge bg="success" pill className="ms-auto">
                    {lineItemsCount}
                  </Badge>
                </h5>

                <div className="table-responsive mb-4">
                  <table className="table table-sm align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Img</th>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartWithProducts.map(({ cartItem, product }) => (
                        <CartLineItemMini
                          key={cartItem.sku}
                          product={product}
                          quantity={cartItem.quantity}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-auto border-top pt-3">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <strong>${subtotal}</strong>
                  </div>
                  <div className="d-flex justify-content-between text-success mb-2">
                    <span>Shipping:</span>
                    <strong>${shipping.toFixed(2)}</strong>
                  </div>
                  <div className="d-flex justify-content-between border-top pt-2">
                    <h5 className="mb-0">Total:</h5>
                    <h5 className="mb-0 text-primary">${total}</h5>
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    className="w-100 mt-3 d-flex align-items-center justify-content-center gap-2"
                    onClick={handlePlaceOrder}
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: "var(--color-primary)",
                      borderColor: "var(--color-primary)",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaTelegramPlane /> Place Order
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
}

export default Checkout;