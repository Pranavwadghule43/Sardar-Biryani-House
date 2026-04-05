import React, { useState } from "react";
import "./Ambiance.css";

// Import images from assets
import img1 from "../../assets/amb_1.png";
import img2 from "../../assets/amb_2.png";
import img3 from "../../assets/amb_3.png";
import img4 from "../../assets/amb_4.png";
import img5 from "../../assets/amb_5.png";
import img6 from "../../assets/amb_6.png";
import img7 from "../../assets/amb_7.png";
import img8 from "../../assets/amb_8.png";
import img9 from "../../assets/amb_9.png";
import img10 from "../../assets/amb_10.png";

const images = [img1, img2, img3,img4,img5,img6,img7,img8,img9,img10];

const Ambiance = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    console.log(current)
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="slider-container" id="ambiance">
      {/* Left Arrow */}
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>

      {/* Slides */}
      <div className="slider">
        {images.map((img, index) => (
          <div
            className={`slide ${
              index === current ? "active" : ""
            }`}
            key={index}
          >
            <img src={img} alt={`slide-${index}`} />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>

      {/* Dots */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${
              index === current ? "active-dot" : ""
            }`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Ambiance;