// Task 1 : Fetch tours from API, copilot prompt :   Fetch tours from https://course-api.com/react-tours-project using useEffect
//  and Store in state: tours, loading, error
 
// a. Importing the react tools and the components 
import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import './App.css';
import './components/styles/style.css'; // adding the styling 

function App() {
  // b. Setting the state for tours, loading, and error 
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// c. Fetching the data from the APi 
const fetchTours = async () => { // 
  setLoading(true);  //loading screen starts
  
  try {
    const response = await fetch('https://www.course-api.com/react-tours-project'); // d. Added www to fix CORS issue (otherwise use a proxy)
    if (!response.ok) {
      throw new Error('Failed to fetch tours');
    }
    const data = await response.json(); // Convert API response into JSON
    setTours(data); // Set the tours into state
    setError(false); // Reset the error state if successful
  } catch (err) {
    setError(err.message); // Save any error message into state
  } finally {
    setLoading(false); // Turn off loading after fetch is complete
  }
};

  useEffect(() => {
    fetchTours(); // fetch the data once when page loads 
  }, []);
// Function to remove a tour from the list by filtering it out based on its id 
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };
// Task 4 Conditional rendering, copilot prompt : 
// If loading is true, display "Loading..."
// If error, display an error message
// Else, render Gallery with tour data
  return ( // reder the app 
    <main>
      <h1> Select your dream Vacation </h1> 
      {loading && <p>Loading,please wait ...</p>} {/* Loading message */}
      {error && <p> Warnign : Error has occured : {error}</p>} {/* Eroor  message */}
      {/*  Task 5 Refresh button, copilot prompt : 
      // If no tours are left, show a "Refresh" button to refetch the data */}
      {!loading && !error && tours.length === 0 && (
        <div>
          <p>No tours left ! , Refresh to home page</p>
          <button onClick={fetchTours}>Refresh</button>
        </div>
      )}
      {/* Displaying the gallery of tours if that location exist */}
      {!loading && !error && tours.length > 0 && (
        <Gallery tours={tours} onRemove={removeTour} />
      )}
    </main>
  );
}

export default App;
