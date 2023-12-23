import React from 'react';
import { Link } from 'react-router-dom';

import '../CharacterGrid/Charecter.css'

const CharacterCard = ({ character }) => {
  const { id, name, image, species, gender } = character;

  return (
    <Link to={`/characters/${id}`}>
      <div className="character-card">
        <img src={image} alt={name} />
        <div>
 

          <h3>{name}</h3>
          <p>{species}</p>
          <p>{gender}</p>
        </div>
      </div>
    </Link>
    
  );
};

export default CharacterCard;

