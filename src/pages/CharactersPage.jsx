// src/pages/CharactersPage.js
import React, { useState, useEffect } from 'react';
import CharacterCard from '../components/CharacterGrid/CharacterCard';

import axios from 'axios';


const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h2>Rick and Morty Characters</h2>
      <div className="character-grid">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
  

export default CharactersPage;
