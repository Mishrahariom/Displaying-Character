// Pages/LocationPage.jsx

// pages/LocationPage.jsx
import React, { useState, useEffect } from 'react';
import LocationCard from '../components/LocationGrid/LocationCard';

import axios from 'axios';

const LocationPage = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/location');
        setLocations(response.data.results);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div>
      <h2>Rick and Morty Locations</h2>
      <div className="location-grid">
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
}

export default LocationPage;

// import React, { useState, useEffect } from 'react';
// import LocationCard from '../components/LocationGrid/LocationCard';
// import axios from 'axios';

// const LocationsPage = () => {
//   const [locations, setLocations] = useState([]);

//   useEffect(() => {
//     const fetchLocations = async () => {
//       try {
//         const response = await axios.get('https://rickandmortyapi.com/api/location');
//         setLocations(response.data.results);
//       } catch (error) {
//         console.error('Error fetching locations:', error);
//       }
//     };

//     fetchLocations();
//   }, []);

//   return (
//     <div>
//       <h2>Rick and Morty Locations</h2>
//       <div className="location-grid">
//         {locations.map((location) => (
//           <LocationCard key={location.id} location={location} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LocationsPage;
