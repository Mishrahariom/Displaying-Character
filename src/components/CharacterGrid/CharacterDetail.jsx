// src/components/CharacterGrid/CharacterDetail.js
import React from 'react';

const CharacterDetail = ({ character }) => {
  const { name, image, species, gender, origin, location, episodes } = character;

  return (
    <div className="character-detail">
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {origin.name}</p>
        <p>Current Location: {location.name}</p>
        <p>Episodes:</p>
        {/* <ul>
          {episodes.map((episode) => (
            <li key={episode.id}>{episode.name}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default CharacterDetail;
