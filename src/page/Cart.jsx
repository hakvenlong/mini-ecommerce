
function Cart() {
    return (
        <>
            <main className="container my-5">
                <h2 className="mb-4">Shopping Cart</h2>
                <div className="table-responsive custom-table-responsive">
                    <table className="cart-table table table-bordered">
                        <thead>
                            <tr className="table-primary">
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="cart-items">
                        </tbody>
                    </table>
                </div>
                <div id="empty-cart-message" className="alert alert-info text-center" style={{}}>
                    Your cart is empty. <a href="./shop.html">Continue shopping</a>.
                </div>
                <div className="cart-summary text-end mt-4">
                    <h3>Total: $<span id="cart-total">0.00</span></h3>
                    <a href="./checkout.html" className="btn btn-primary" id="checkout-btn" disabled>Proceed to Checkout</a>
                </div>
            </main>
        </>
    )
}

export default Cart