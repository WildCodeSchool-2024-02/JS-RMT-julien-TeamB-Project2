// eslint-disable-next-line import/no-unresolved
import { toast } from "sonner";
import { useCart } from "../context/CartContext";
import CartComponent from "../components/CartComponent";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../components/CartComponent.css";
import "../App.css";

function Cart() {
  const { cart, clearCart } = useCart();
  const total = cart
    .reduce((acc, game) => acc + game.price * game.quantity, 0)
    .toFixed(2);

  const handleClearCart = () => {
    toast.info("Your cart has been emptied !", {
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
    clearCart();
  };

  return (
    <main className="bgColorMain bgSizeWeb">
      <Navigation />
      <div className="cartTitleButton">
        <h1 className="styleTitleH1">My cart</h1>
        <button className="styleButton" type="button" onClick={handleClearCart}>
          Empty the cart
        </button>
      </div>
      <section className="cartMainContainer bgSizeWeb">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((game) => <CartComponent key={game.id} game={game} />)
        )}
        <h3>Total: {total} €</h3>
      </section>
      <Footer />
    </main>
  );
}

export default Cart;
