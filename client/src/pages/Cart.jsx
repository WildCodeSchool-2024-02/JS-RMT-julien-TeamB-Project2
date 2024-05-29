import { useCart } from "../context/CartContext";
import CartComponent from "../components/CartComponent";
import Navigation from "../components/Navigation";
import "../components/CartComponent.css";
import "../App.css";

function Cart() {
  const { cart } = useCart();

  return (
    <main>
      <Navigation />
      <h1>Mon panier</h1>
      <section className="cartMainContainer">
        {cart.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          cart.map((game) => (
            <CartComponent
              key={game.id}
              id={game.id}
              title={game.title}
              image={game.image}
              price={game.price}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default Cart;
