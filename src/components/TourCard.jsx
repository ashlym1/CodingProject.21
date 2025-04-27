import React from 'react';
// Tas; 2 : Build the tour card components, copilo prompt : 
// Create a card component to display a tour's name, info, image, and price
// Include a "Not Interested" button that removes this tour when clicked
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