// eslint-disable-next-line import/no-unresolved
import { toast } from 'sonner';
import "./CartComponent.css";
import { useCart } from "../context/CartContext";

import addGameIcon from "../assets/images/addGameIcon.png";

function CartComponent({ id, title, image, price }) {
  const { removeFromCart } = useCart();

  const handleRemoveFromCart = () => {
    toast.info("The game has been removed from your cart !", {
      position: "bottom-right",
      duration: 2000,
      expand: false,
      style: {
        height: "5rem",
        width: "20rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      },
    });
    removeFromCart(id);
  };

  return (
    <section className="cartContainer bgCartContainer">
      <img className="cartImg" src={image} alt={title} />
        <h2 className="styleTitleH2">{title}</h2>
        <p className="styleText">{price} EUR</p>
        <button 
          type="button"
          onClick={handleRemoveFromCart}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <img src={addGameIcon} alt="Retirer du panier" />
        </button>
    </section>
  );
}

export default CartComponent;
