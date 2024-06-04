import { useCart } from "../context/CartContext";
import CartButton from "./Button/CartButton";
import "./CartComponent.css";
import addGameIcon from "../assets/images/addGameIcon.png";

function CartComponent({ game }) {
  const { updateQuantity, removeFromCart } = useCart();
  return (
    <section className="cartContainer bgCartContainer">
      <img className="cartImg" src={game.image} alt={game.title} />
      <div className="cartContent">
        <h2 className="styleTitleH2">{game.title}</h2>
        <p className="styleText">{game.price} EUR</p>
        <label>
          Quantité :{" "}
          <select
            name="Quantité"
            onChange={(event) => updateQuantity(event, game)}
          >
            {[...Array(10)].map((_, quantity) => {
              const key = quantity + 1;
              return (
                <option key={key} value={key}>
                  {key}
                </option>
              );
            })}
          </select>
        </label>
        <CartButton game={game} />
        <button type="button" onClick={() => removeFromCart(game.id)}>
          <img src={addGameIcon} alt="Retirer du panier" />
        </button>
      </div>
    </section>
  );
}

export default CartComponent;
