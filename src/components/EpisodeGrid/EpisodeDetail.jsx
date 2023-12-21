// EpisodeGrid/EpisodeDetail.jsx
import React from 'react';

const EpisodeDetail = ({ episode }) => {
  const { name, air_date, episode_number, characters } = episode;

  return (
    <div className="episode-detail">
      <h2>{name}</h2>
      <p>Air Date: {air_date}</p>
      <p>Episode Number: {episode_number}</p>
      <p>Characters:</p>
      <ul>
        {characters.map((character, index) => (
          <li key={character.id || index}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeDetail;


