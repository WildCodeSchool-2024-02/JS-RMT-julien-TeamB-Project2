function ArticleComponents({ game }) {
  return (
    <section className="articleContainer">
      <img src={game.image} alt={game.id} />
      <h2>{game.title}</h2>
      <h4>{game.genre}</h4>
      <p>{game.description}</p>
      <h3>{game.price}€</h3>
    </section>
  );
}

export default ArticleComponents;
