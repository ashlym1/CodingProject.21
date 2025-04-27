import React from 'react';
// Tas; 2 : Build the tour card components, copilo prompt : 
// Create a card component to display a tour's name, info, image, and price
// Include a "Not Interested" button that removes this tour when clicked

// Creating the TourCard component to display the tour details 
function TourCard({ id, name, info, image, price, onRemove }) {
  return (
    <div className="tour-card">  
      <img src={image} alt={name} />  {/* tour image */}
      <div className="tour-details"> 
        <h2>{name}</h2>  {/* tour Names  */}
        {/* tour information  */}
        <p>{info}</p>
        {/* tour pricing  */}
        <p>Price: ${price}</p>
        {/* Button that will remove a tour when clicked  */}
        <button onClick={() => onRemove(id)}>Not Interested</button>
      </div>
    </div>
  );
}

export default TourCard;