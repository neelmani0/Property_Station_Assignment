import React, { useState } from 'react';
import Card from './Card';
import './Carousel.css';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';

const cardData = [
  { image: img1, name: 'Whiteland Urban Resort', location: 'Sector 103, Gurgaon', price: "On Request" },
  { image: img2, name: 'Smartworld One DXP', location: 'Sector 113, Gurgaon', price: "On Request" },
  { image: img3, name: 'M3M Mansion', location: 'Sector 113, Gurgaon', price: "On Request" },
  { image: img4, name: 'M3M Altitude', location: 'Sector 65, Gurgaon', price: "On Request" },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const visibleCards = [
    cardData[index % cardData.length],
    cardData[(index + 1) % cardData.length],
    cardData[(index + 2) % cardData.length],
  ];

  return (
    <div className="carousel-container">
      <header className="carousel-header">
        <h1 className="carousel-heading-italic">Trending</h1>
        <h1 className="carousel-heading-normal">Projects</h1>
      </header>
      <div className="carousel">
        <button className="carousel-button left" onClick={handlePrev}>
          <FaLessThan />
        </button>
        <div className="carousel-cards">
          {visibleCards.map((card, idx) => (
            <div key={idx} className={`card ${idx === 1 ? 'center' : 'side'}`}>
              <Card {...card} />
            </div>
          ))}
        </div>
        <button className="carousel-button right" onClick={handleNext}>
          <FaGreaterThan />
        </button>
      </div>
      <div className="view-more-container">
        <button className="view-more-button">More Projects</button>
      </div>
    </div>
  );
};

export default Carousel;
