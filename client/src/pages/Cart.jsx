import { useLoaderData } from "react-router-dom";
import CartComponent from "../components/CartComponent";
import "../components/CartComponent.css";

function Cart() {

  const games = useLoaderData()

  return (
    <main>
      <h1>Mon panier</h1>
      <section className="shopContainer">
        <CartComponent
        game={games[0]}/>
        <CartComponent
        game={games[1]}/>
        <CartComponent
        game={games[2]}/>
        <CartComponent
        game={games[3]}/>
      </section>
    </main>
  );
}

export default Cart;
