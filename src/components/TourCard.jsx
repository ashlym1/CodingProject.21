import React from 'react';

function TourCard({ id, name, info, image, price, onRemove }) {
  return (
    <div className="tour-card">
      <img src={image} alt={name} />
      <div className="tour-details">
        <h2>{name}</h2>
        <p>{info}</p>
        <p>Price: ${price}</p>
        <button onClick={() => onRemove(id)}>Not Interested</button>
      </div>
    </div>
  );
}

export default TourCard;