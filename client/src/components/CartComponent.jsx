import "./CartComponent.css";

function CartComponent({ title, image, price }) {
  return (
    <section className="cartContainer bgCartContainer">
      <img className="cartImg" src={image} alt={title} />
      <div className="cartContent">
        <h2 className="styleTitleH2">{title}</h2>
        <p className="styleText">{price} EUR</p>
      </div>
    </section>
  );
}

export default CartComponent;
