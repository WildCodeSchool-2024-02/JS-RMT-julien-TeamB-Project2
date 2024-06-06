import { toast } from "sonner";
import { useCart } from "../../context/CartContext";

function CartButton({ game }) {
  const { handleGameInCart, isInCart } = useCart();

  const handleCartAction = () => {
    if (isInCart(game)) {
      handleGameInCart(game);
      toast.error("The game has been removed from the cart!", {
        position: "bottom-right",
        duration: 2000,
        expand: true,
        style: {
          height: "5rem",
          width: "20rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        },
      });
    } else {
      handleGameInCart(game);
      toast.success("The game has been added to the cart !", {
        position: "bottom-right",
        duration: 2000,
        expand: true,
        style: {
          height: "5rem",
          width: "20rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        },
      });
    }
  };

  return (
    <button
      className="styleButton articleButton"
      type="button"
      onClick={() => handleGameInCart(game)}
    >
      {isInCart(game) ? "Remove from Cart" : "Add to Cart"}
    </button>
  );
}

export default CartButton;
