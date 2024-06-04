import { createContext, useState, useContext } from "react";

// Création du contexte du panier
export const CartContext = createContext();

// Hook personnalisé pour accéder au contexte du panier
export const useCart = () => useContext(CartContext);

// Fournisseur de contexte du panier
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    setCart((prevCart) => [...prevCart, { ...game, quantity: 1 }]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const isInCart = (game) => cart.some((item) => item.id === game.id);

  const handleGameInCart = (game) => {
    if (isInCart(game)) {
      removeFromCart(game.id);
    } else {
      addToCart(game);
    }
  };

  const updateQuantity = (event, game) => {
    if (+event.target.value <= 0) {
      removeFromCart(game.id);
    } else {
      setCart((prev) =>
        prev.map((item) => {
          if (item.id === game.id) {
            return { ...game, quantity: +event.target.value };
          }
          return item;
        })
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };
  // Autres fonctions pour gérer le panier

  return (
    <CartContext.Provider
      value={{ cart, handleGameInCart, clearCart, isInCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
