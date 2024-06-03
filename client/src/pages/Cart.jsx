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

  return (
    <main className="bgColorMain">
      <Navigation />
      <h1 className="styleTitleH1">Mon panier</h1>
      <button type="button" onClick={clearCart}>
        Vider le panier
      </button>
      <section className="cartMainContainer">
        {cart.length === 0 ? (
          <p>Votre panier est vide.</p>
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
