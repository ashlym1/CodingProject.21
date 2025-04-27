import { useState, useEffect } from 'react';
import 

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  return (
    <main>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <section>
          {tours.map((tour) => (
            <div key={tour.id}>
              <h2>{tour.name}</h2>
              <p>{tour.info}</p>
              <p>Price: ${tour.price}</p>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}

export default App;
