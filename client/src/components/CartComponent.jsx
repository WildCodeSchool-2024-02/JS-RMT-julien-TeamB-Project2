import "./CartComponent.css";
import { useCart } from "../context/CartContext";

import addGameIcon from "../assets/images/addGameIcon.png";

function CartComponent({ id, title, image, price }) {
  const { removeFromCart } = useCart();

  
  return (
    <section className="cartContainer bgCartContainer">
      <img className="cartImg" src={image} alt={title} />
        <h2 className="styleTitleH2">{title}</h2>
        <p className="styleText">{price} EUR</p>
        <button 
          type="button"
          onClick={() => {
            removeFromCart(id);
          }}
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
