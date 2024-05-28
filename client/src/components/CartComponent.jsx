import "./CartComponent.css";
import { useCart } from "../context/CartContext";

function CartComponent({ id, title, image, price }) {
  const { removeFromCart } = useCart();

  const handleRemove = () => {
    removeFromCart(id);
  };

  return (
    <section className="cartContainer cartBgGradient">
      <img className="cartImg" src={image} alt={title} />
      <div className="cartContent">
        <h2>{title}</h2>
        <h2>{price} EUR</h2> 
        <button type="button" onClick={handleRemove}>Retirer du panier</button>
      </div>
    </section>
  );
}

export default CartComponent;
