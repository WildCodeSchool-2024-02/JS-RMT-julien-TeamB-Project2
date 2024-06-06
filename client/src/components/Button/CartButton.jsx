import { useCart } from "../../context/CartContext";

function CartButton({ game }) {
  const { handleGameInCart, isInCart } = useCart();
  return (
    <button
      className="articleButton"
      type="button"
      onClick={() => handleGameInCart(game)}
    >
      {isInCart(game) ? "Remove from Cart" : "Add to Cart"}
    </button>
  );
}

export default CartButton;
