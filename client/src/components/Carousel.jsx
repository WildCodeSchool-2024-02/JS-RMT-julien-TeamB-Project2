import { Link, useLoaderData } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel.css";

function Carousel() {
  const carouselData = useLoaderData();

  const items = carouselData.map((item) => (
    <Link to={`/articles/${item.id}`} key={item.title}>
      <img className="carouselImage" src={item.image} alt={item.title} />
    </Link>
  ));

  return (
    <div className="carouselContainer">
      <AliceCarousel mouseTracking items={items} />
    </div>
  );
}

export default Carousel;
