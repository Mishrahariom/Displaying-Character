import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../LocationGrid/Location.css';

const  LocationDetail = ({ location }) => {
  const { name, type, dimension, residents } = location;
  const [residentDetails, setResidentDetails] = useState([]);

  useEffect(() => {
    const fetchResidentDetails = async () => {
      try {
        const residentPromises = residents.map((residentUrl) => axios.get(residentUrl));
        const residentResponses = await Promise.all(residentPromises);
        const residentsData = residentResponses.map((response) => response.data);
        setResidentDetails(residentsData);
      } catch (error) {
        console.error('Error fetching resident details:', error);
      }
    };

    fetchResidentDetails();
  }, [residents]);

  return (
    <div className="location-detail">
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Dimension: {dimension}</p>
      <p>Residents:</p>
      <ul>
        {residentDetails.map((resident) => (
          <li key={resident.id}>{resident.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LocationDetail;
