import React from 'react';
import { Link } from 'react-router-dom';
import '../LocationGrid/Location.css'

const LocationCard = ({ location }) => {
  const { id, name, type, dimension } = location;

  return (
    <Link to={`/locations/${id}`}>
      <div className="location-card">
        <h3>{name}</h3>
        <p>Type: {type}</p>
        <p>Dimension: {dimension}</p>
      </div>
    </Link>
  );
};

export default LocationCard;

