import "./CartComponent.css";

function CartComponent({ title, image, price }) {
  return (
    <section className="cartContainer cartBgGradient">
      <img className="cartImg" src={image} alt={title} />
      <div className="cartContent">
        <h2>{title}</h2>
        <h2>{price} EUR</h2>
      </div>
    </section>
  );
}

export default CartComponent;
