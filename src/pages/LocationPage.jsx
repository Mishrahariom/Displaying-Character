import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import LocationCard from '../components/LocationGrid/LocationCard';

const LocationPage = () => {
  const [locations, setLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/location', {
          params: { name: searchTerm }
        });
        setLocations(response.data.results);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, [searchTerm]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Rick and Morty Locations</h2>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search by location name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="location-grid">
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
}

export default LocationPage;

