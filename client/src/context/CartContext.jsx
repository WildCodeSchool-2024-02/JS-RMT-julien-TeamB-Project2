import { createContext, useState, useContext, useEffect } from "react";

// Création du contexte du panier
export const CartContext = createContext();

// Hook personnalisé pour accéder au contexte du panier
export const useCart = () => useContext(CartContext);

// Fournisseur de contexte du panier
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  /**
   * sauvegarde le panier dans le localStorage
   * @param {object} newCart 
   */
  const saveCartToLocalStorage = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  useEffect(() => {
    // récuperation des éléments dans le local storage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  /**
   * Maj du panier et sauvegarde dans localStorage
   * @param {object} newCart 
   */
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

  /**
   * verifie la présence du jeu dans le panier
   * @param {object} game 
   * @returns boolean
   */
  const isInCart = (game) => cart.some((item) => item.id === game.id);

  /**
   * ajoute ou retire l'article du panier
   * @param {object} game 
   */
  const handleGameInCart = (game) => {
    if (isInCart(game)) {
      removeFromCart(game.id);
    } else {
      addToCart(game);
    }
  };

  // modification de la quantité d'un article dans le panier
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
