import React, { useState, useEffect } from 'react';
import './Carousel.css';
import image1 from '../../assets/Home_Desk_Kaminha.jpg'
import image2 from '../../assets/Home_Desk-frontline.jpg'

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    image1,
    image2,
  ];

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel">
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />

      <button className="prev" onClick={prevSlide}>{'<'}</button>
      <button className="next" onClick={nextSlide}>{'>'}</button>
    </div>
  );
};

export default Carousel;
