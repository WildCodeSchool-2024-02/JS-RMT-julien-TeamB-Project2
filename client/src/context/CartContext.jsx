import { createContext, useState, useContext, useEffect } from "react";

// Création du contexte du panier
export const CartContext = createContext();

// Hook personnalisé pour accéder au contexte du panier
export const useCart = () => useContext(CartContext);

// Fournisseur de contexte du panier
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Fonction pour sauvegarder le panier dans le localStorage
  const saveCartToLocalStorage = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Chargement du panier depuis le localStorage lors du montage du composant
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Fonction pour mettre à jour le panier et sauvegarder dans le localStorage
  const updateCart = (newCart) => {
    setCart(newCart);
    saveCartToLocalStorage(newCart);
  };

    // Autres fonctions pour gérer le panier
  const addToCart = (game) => {
    updateCart([...cart, { ...game, quantity: 1 }]);
  };

  const removeFromCart = (id) => {
    updateCart(cart.filter((item) => item.id !== id));
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
      updateCart(
        cart.map((item) => {
          if (item.id === game.id) {
            return { ...game, quantity: +event.target.value };
          }
          return item;
        })
      );
    }
  };

  const clearCart = () => {
    updateCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, handleGameInCart, clearCart, isInCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
