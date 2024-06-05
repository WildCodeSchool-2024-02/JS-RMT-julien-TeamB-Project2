import { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "./Carousel.css";

function Carousel({ carouselData }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (
      carouselData &&
      Array.isArray(carouselData.images) &&
      Array.isArray(carouselData.titles)
    ) {
      const { images: imageArray, titles: titleArray } = carouselData;
      const combinedData = imageArray.map((image, index) => ({
        image,
        title: titleArray[index],
      }));
      const shuffledImages = [...combinedData].sort(() => 0.5 - Math.random());
      setImages(shuffledImages.slice(0, 6));
    }
  }, [carouselData]);
  const items = images.map((item) => (
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
