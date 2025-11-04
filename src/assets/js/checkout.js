
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const orderSummary = document.getElementById('order-summary');
    const subtotalElement = document.getElementById('subtotal');
    const orderTotalElement = document.getElementById('order-total');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const checkoutContent = document.getElementById('checkout-content');
    const placeOrderBtn = document.getElementById('place-order-btn');
    const shippingForm = document.getElementById('shipping-form');
    const paymentForm = document.getElementById('payment-form');

    // Display cart items or show empty message
    if (cartItems.length === 0) {
        emptyCartMessage.style.display = 'block';
        checkoutContent.style.display = 'none';
    } else {
        emptyCartMessage.style.display = 'none';
        checkoutContent.style.display = 'flex';
        let subtotal = 0;

        cartItems.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const row = document.createElement('tr');
            row.innerHTML = `
                        <td>${item.name}</td>
                        <td>$${item.price.toFixed(2)}</td>
                        <td>${item.quantity}</td>
                        <td>$${itemTotal.toFixed(2)}</td>
                    `;
            orderSummary.appendChild(row);
        });

        const shipping = 5.00;
        const total = subtotal + shipping;

        subtotalElement.textContent = subtotal.toFixed(2);
        orderTotalElement.textContent = total.toFixed(2);
    }

    // Validate forms and enable/disable Place Order button
    function validateForms() {
        const shippingValid = shippingForm.checkValidity();
        const paymentValid = paymentForm.checkValidity();
        placeOrderBtn.disabled = !(shippingValid && paymentValid);
    }

    shippingForm.addEventListener('input', validateForms);
    paymentForm.addEventListener('input', validateForms);

    // Handle Place Order button click
    placeOrderBtn.addEventListener('click', () => {
        if (shippingForm.checkValidity() && paymentForm.checkValidity()) {
            alert('Order placed successfully! Thank you for shopping with SMOS.');
            localStorage.removeItem('cartItems'); // Clear cart
            window.location.href = './index.html'; // Redirect to home
        }
    });

    // Initialize AOS
    AOS.init({ duration: 800, once: true });
});