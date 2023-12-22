// src/components/CharacterGrid/CharacterDetail.js
// CharacterGrid/CharacterDetail.jsx
// CharacterGrid/CharacterDetail.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CharacterGrid/Charecter.css'

const CharacterDetail = ({ character }) => {
  const { name, image, species, gender, origin, location, episode } = character;
  const [episodeDetails, setEpisodeDetails] = useState([]);

  useEffect(() => {
    const fetchEpisodeDetails = async () => {
      try {
        const episodePromises = episode.map((episodeUrl) => axios.get(episodeUrl));
        const episodeResponses = await Promise.all(episodePromises);
        const episodes = episodeResponses.map((response) => response.data);
        setEpisodeDetails(episodes);
      } catch (error) {
        console.error('Error fetching episode details:', error);
      }
    };

    fetchEpisodeDetails();
  }, [episode]);

  return (
    <div className="character-detail">
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {origin.name}</p>
        <p>Current Location: {location.name}</p>
        <p>Episodes: 👇</p>
        <ul>
          {episodeDetails.map((episode) => (
            <li key={episode.id}>{episode.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetail;


