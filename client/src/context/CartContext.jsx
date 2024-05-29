import { createContext, useState, useContext } from "react";

// Création du contexte du panier
export const CartContext = createContext();

// Hook personnalisé pour accéder au contexte du panier
export const useCart = () => useContext(CartContext);

// Fournisseur de contexte du panier
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    setCart((prevCart) => [...prevCart, game]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  // Autres fonctions pour gérer le panier

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};



