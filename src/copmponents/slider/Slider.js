import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NextIcon from "../../assets/slider/NextIcon";
import PrevIcon from "../../assets/slider/PrevIcon";
import "./Slider.scss";

const Slider = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = props.sliderData.length;

  const prevHandler = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  const nextHandler = useCallback(() => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, length]);

  useEffect(() => {
    const timeout = setTimeout(() => nextHandler(), 5000);
    return () => clearTimeout(timeout);
  }, [currentIndex, nextHandler]);

  return (
    <section className="slider">
      <button
        onClick={prevHandler}
        className="slider__arrow slider__arrow-prev"
      >
        <PrevIcon />
      </button>
      <button
        onClick={nextHandler}
        className="slider__arrow slider__arrow-next"
      >
        <NextIcon />
      </button>

      {props.sliderData.map((slider, index) => (
        <div
          key={slider.src}
          className={currentIndex === index ? "slide active" : "slide"}
        >
          {currentIndex === index && (
            <>
              <div className="slide__img-box">
                <img src={slider.src} alt="img" />
              </div>
              <div className="slide__text-box">
                <p className="slide__text">{slider.discount}% Discount</p>
                <h1 className="slide__heading">{slider.header}</h1>
                <p className="slide__text">{slider.lightText}</p>
                <Link className="slide__shopNow" to="/shop">
                  Shop Now
                </Link>
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default Slider;
