import React from 'react';
import './Card.css';
import { FaMapMarkerAlt, FaRupeeSign } from 'react-icons/fa';

const Card = ({ image, name, location, price }) => {
  return (
    <div className="card-content">
      <img src={image} alt={name} className="card-image" />
      <h2 className="card-name">{name}</h2>
      <p className="card-location">
        <FaMapMarkerAlt /> {location}
      </p>
      <p className="card-price">
        <FaRupeeSign /> {price}
      </p>
      <button className="card-button">View More</button>
    </div>
  );
};

export default Card;
