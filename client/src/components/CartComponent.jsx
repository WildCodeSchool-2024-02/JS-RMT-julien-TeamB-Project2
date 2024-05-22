import "./CartComponent.css"

function CartComponent({game}) {
  return (
    <section className='cartContainer'>
      <img src={game.image} alt={game.title} />
      <h2>{game.title}</h2>
      <p>Quantité(s) 1</p>
      <p>Prix {game.price} EUR</p>
    </section>
  )
}

export default CartComponent
