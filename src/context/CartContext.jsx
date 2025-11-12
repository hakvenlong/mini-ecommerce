// src/context/CartContext.jsx
export const useCart = () => {
  const context = useContext(CartContext);
  return context; // must include: { items, addItem, removeItem, clearCart }
};