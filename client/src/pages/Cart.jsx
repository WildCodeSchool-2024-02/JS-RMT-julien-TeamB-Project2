import { useLoaderData } from "react-router-dom";
import CartComponent from "../components/CartComponent";

function Cart() {

  const games = useLoaderData()

  return (
    <section className="">
      <h1>Mon panier</h1>
      <CartComponent
      game={games[0]}/>
      <CartComponent
      game={games[1]}/>
      <CartComponent
      game={games[2]}/>
    </section>
  );
}

export default Cart;
