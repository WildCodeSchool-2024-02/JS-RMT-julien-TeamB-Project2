import { useLoaderData } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "./Carousel.css";

function Carousel() {
  const carouselData = useLoaderData();

  const items = carouselData.map((item) => (
    <img
      key={item.title}
      src={item.image}
      alt={item.title}
      className="carouselImage"
    />
  ));

  return (
    <div className="carouselContainer">
      <AliceCarousel mouseTracking items={items} />
    </div>
  );
}

export default Carousel;
