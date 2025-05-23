// Task 3: Map tours in a gallery component, copilot prompt : 
// create a gallery that maps over the tours array and rencders a Tour component for each tour
import TourCard  from "./TourCard"
// getting the list of tours from the TourCard component and remove functions so it can show each tour card
function Gallery ({ tours, onRemove }) {
  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
         id={tour.id}
         name={tour.name}
         info={tour.info}
         image={tour.image}
         price={tour.price}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
export default Gallery;



