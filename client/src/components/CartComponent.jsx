// eslint-disable-next-line import/no-unresolved
import { toast } from 'sonner';
import "./CartComponent.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import addGameIcon from "../assets/images/addGameIcon.png";

function CartComponent({ game }) {
  const { updateQuantity, handleGameInCart } = useCart();

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
    handleGameInCart(game);
  };

  return (
    <section className="cartContainer bgCartContainer">
      <Link to={`/articles/${game.id}`}>
        <img className="cartImg" src={game.image} alt={game.title} />
      </Link>
      <div className="cartContent">
        <h2 className="styleTitleH2">{game.title}</h2>
        <p className="styleText">{game.price} EUR</p>
        <label className="cartQuantiteNumber">
          Quantité
          <select
            className="cartSelectQuantite"
            name="Quantité"
            value={game.quantity}
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
        <button
          className="cartButtonDelete"
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
      </div>
    </section>
  );
}

export default CartComponent;
