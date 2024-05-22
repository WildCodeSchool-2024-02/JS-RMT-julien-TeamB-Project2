

function CartComponent({game}) {
  return (
    <section className='cartContainer'>
      <img src={game.image} alt={game.title} />
      <h2>{game.title}</h2>
      <span>Quantité(s) 1</span>
      <span>Prix {game.price} EUR</span>
    </section>
  )
}

export default CartComponent
