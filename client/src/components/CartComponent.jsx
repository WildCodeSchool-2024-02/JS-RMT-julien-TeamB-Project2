import "./CartComponent.css"

function CartComponent({game}) {
  return (
    <section className='cartContainer bgGradientCard'>
      <img src={game.image} alt={game.title} />
      <div className="content">
      <h2>{game.title}</h2>
      <h2>Quantité(s) 1</h2>
      <h2>Prix {game.price} EUR</h2>
      </div>
    </section>
  )
}

export default CartComponent
