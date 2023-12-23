import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../App.css';

import LocationDetail from '../components/LocationGrid/LocationDetail';

const LocationDetailPage = () => {
  const [location, setLocation] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
        setLocation(response.data);
      } catch (error) {
        console.log('Error fetching location details:', error);
      }
    };

    fetchLocation();
  }, [id]);

  if (!location) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 style={{"textAlign": "center"}}>Location Details</h2>
      <LocationDetail location={location} />
    </div>
  );
};

export default LocationDetailPage;

