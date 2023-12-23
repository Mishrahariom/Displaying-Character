import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../EpisodeGrid/Episode.css';

const EpisodeDetail = ({ episode }) => {
  const { name, air_date, episode_number, characters } = episode;
  const [characterDetails, setCharacterDetails] = useState([]);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const characterPromises = characters.map((characterUrl) => axios.get(characterUrl));
        const characterResponses = await Promise.all(characterPromises);
        const characterDetails = characterResponses.map((response) => response.data);
        setCharacterDetails(characterDetails);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    fetchCharacterDetails();
  }, [characters]);

  return (
    <div className="episode-detail">
      <h2>{name}</h2>
      <p>Air Date: {air_date}</p>
      <p>Episode Number: {episode_number}</p>
      <p>Characters: Click👇</p>
      <ul>
        {characterDetails.map((character) => (
          <li key={character.id}>
            {/* Link to the character details page */}
            <Link to={`/characters/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeDetail;



