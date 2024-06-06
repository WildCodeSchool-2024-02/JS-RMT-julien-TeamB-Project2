import { useCart } from "../../context/CartContext";

function CartButton({ game }) {
  const { handleGameInCart, isInCart } = useCart();
  return (
    <button
      className="styleButton articleButton"
      type="button"
      onClick={() => handleGameInCart(game)}
    >
      {isInCart(game) ? "Supprimer du Panier" : "Ajouter au panier"}
    </button>
  );
}

export default CartButton;
