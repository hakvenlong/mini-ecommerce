

function Wishlist() {
    return (
        <>
            <main className="container my-5">
                <h2 className="mb-4">Wishlist</h2>
                <table className="cart-table table table-bordered">
                    <thead>
                        <tr className="table-primary">
                            <th>Item</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="wishlist-items"></tbody>
                </table>
                <div className="cart-summary text-end mt-4">
                    <a href="./shop.html" className="btn btn-primary">Continue Shopping</a>
                </div>
            </main>
        </>
    )
}

export default Wishlist