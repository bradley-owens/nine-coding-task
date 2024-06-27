import { useState } from "react";
import "./Carousel.scss";

interface CarouselProps {
  slides: SlideType[];
  isMediaSkinny: boolean;
}

interface SlideType {
  id: number;
  image: string;
}

const Carousel = ({ slides, isMediaSkinny }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className={isMediaSkinny ? "slider-container_skinny" : "slider-container"}
    >
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide: SlideType, index: number) => (
          <div
            key={slide.id}
            className={index === currentSlide ? "slide active" : "slide"}
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="image"
            />
          </div>
        ))}
      </div>
      <button className="arrow prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="arrow next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
