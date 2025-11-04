
function Checkout() {
    return (
        <>

            <main className="container my-5">
                <h2 className="mb-4">Checkout</h2>
                <div id="empty-cart-message" className="alert alert-info text-center" style={{}}>
                    Your cart is empty. <a href="./shop.html">Continue shopping</a>.
                </div>
                <div className="row" id="checkout-content">
                     {/* Shipping Information  */}
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4 className="card-title">Shipping Information</h4>
                                <form id="shipping-form">
                                    <div className="mb-3">
                                        <label for="fullName" className="form-label">Full Name</label>
                                        <input type="text" className="form-control" id="fullName" required/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="address" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="address" required/>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label for="city" className="form-label">City</label>
                                            <input type="text" className="form-control" id="city" required/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label for="zipCode" className="form-label">Zip Code</label>
                                            <input type="text" className="form-control" id="zipCode" pattern="[0-9]{5}" title="Zip Code must be 5 digits" required/>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="country" className="form-label">Country</label>
                                        <select className="form-select" id="country" required>
                                            <option value="">Select a country</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="UK">United Kingdom</option>
                                            {/* Add more countries as needed  */}
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* Payment Information  */}
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4 className="card-title">Payment Information</h4>
                                <form id="payment-form">
                                    <div className="mb-3">
                                        <label for="cardNumber" className="form-label">Card Number</label>
                                        <input type="text" className="form-control" id="cardNumber" pattern="[0-9]{16}" placeholder="1234 5678 9012 3456" title="Card number must be 16 digits" required/>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label for="expiryDate" className="form-label">Expiry Date</label>
                                            <input type="text" className="form-control" id="expiryDate" pattern="(0[1-9]|1[0-2])\/[0-9]{2}" placeholder="MM/YY" title="Enter expiry date in MM/YY format" required/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label for="cvv" className="form-label">CVV</label>
                                            <input type="text" className="form-control" id="cvv" pattern="[0-9]{3}" placeholder="123" title="CVV must be 3 digits" required/>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="cardName" className="form-label">Name on Card</label>
                                        <input type="text" className="form-control" id="cardName" required/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                     {/* Order Summary  */}
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Order Summary</h4>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody id="order-summary"></tbody>
                                </table>
                                <div className="text-end">
                                    <h5>Subtotal: $<span id="subtotal">0.00</span></h5>
                                    <h5>Shipping: $<span id="shipping">5.00</span></h5>
                                    <h4>Total: $<span id="order-total">0.00</span></h4>
                                    <button className="btn btn-primary w-100" id="place-order-btn" disabled>Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Checkout