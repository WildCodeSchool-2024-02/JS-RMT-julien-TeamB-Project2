import "./CartComponent.css";
import { useCart } from "../context/CartContext";

function CartComponent({ id, title, image, price }) {
  const { removeFromCart } = useCart();

  return (
    <section className="cartContainer bgCartContainer">
      <img className="cartImg" src={image} alt={title} />
      <div className="cartContent">
        <h2 className="styleTitleH2">{title}</h2>
        <p className="styleText">{price} EUR</p>
        <button type="button" onClick = {() => {removeFromCart(id)}}>Retirer du panier</button>
      </div>
    </section>
  );
}

export default CartComponent;
