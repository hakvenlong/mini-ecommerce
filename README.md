# React E-Commerce Store

A modern, responsive **React shopping cart** application built with:

- **React ** + **React Router**
- **use-cart** – lightweight cart state management
- **Fake Store API** – product data
- **Bootstrap 5** – styling & responsiveness
- **React Bootstrap** – toast notifications
- **Custom hooks** – data fetching

---

## Features

- Browse products with images, price, and ratings
- Add to cart with **toast notification**
- View cart with **quantity controls**
- Checkout page with:
  - Shipping form
  - Payment method selection (Cash on Delivery, KHQR/ABA)
  - Order summary with subtotal, shipping, total
- Fully responsive on mobile & desktop

---

## Live Demo

[https://your-deploy-url.com](https://your-deploy-url.com) *(replace with actual link)*

---

## Tech Stack

| Technology        | Purpose                          |
|-------------------|----------------------------------|
| React             | UI framework                     |
| React Router      | Page navigation                  |
| `use-cart`        | Cart state management            |
| Bootstrap 5       | Responsive design & components   |
| React Bootstrap   | Toast notifications              |
| Fake Store API    | Mock product data                |

---

## Project Structure
src/
├── components/

│   └── CartLineItem.jsx

├── pages/

│   ├── Products.jsx

│   ├── Cart.jsx

│   └── Checkout.jsx

├── hook/

│   └── useFetchData.js

├── context/

│   └── CartContext.jsx   (optional – if not using use-cart)

├── App.jsx

├── index.jsx

└── README.md

text


---

## Getting Started

### 1. Clone the repo

```bash
```git clone [https://github.com/yourusername/react-ecommerce.git](https://github.com/hakvenlong/mini-ecommerce.git)```

```cd react-ecommerce```

```npm install```

```npm install react-router-dom bootstrap react-bootstrap use-cart```

```npm start```

License
MIT © Hak Venlong

Support
Found a bug? Want a feature?
Open an issue
