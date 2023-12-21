// EpisodeGrid/EpisodeCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeCard = ({ episode }) => {
  const { id, name, air_date, episode_number } = episode;

  return (
    <Link to={`/episodes/${id}`}>
      <div className="episode-card">
        <h3>{name}</h3>
        <p>Air Date: {air_date}</p>
        <p>Episode Number: {episode_number}</p>
      </div>
    </Link>
  );
};

export default EpisodeCard;
