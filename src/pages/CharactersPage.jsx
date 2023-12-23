import React, { useState, useEffect } from 'react';
import CharacterCard from '../components/CharacterGrid/CharacterCard';

import '../App.css';
import axios from 'axios';

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [episodeFilter, setEpisodeFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character', {
          params: {
            name: searchTerm,
            status: statusFilter,
            location: locationFilter,
            episode: episodeFilter,
            gender: genderFilter,
            species: speciesFilter,
            type: typeFilter,
          },
        });
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, [searchTerm, statusFilter, locationFilter, episodeFilter, genderFilter, speciesFilter, typeFilter]);

  return (
    <div>
      <h2 className='character-name'>Rick and Morty Characters</h2>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">Filter by Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
          <option value="">Filter by Location</option>
          {Array.from(new Set(characters.map((character) => character.location.name))).map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        <select value={episodeFilter} onChange={(e) => setEpisodeFilter(e.target.value)}>
          <option value="">Filter by Episode</option>
          {Array.from(new Set(characters.flatMap((character) => character.episode))).map((episode) => (
            <option key={episode} value={episode}>
              {episode}
            </option>
          ))}
        </select>
        <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
          <option value="">Filter by Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="unknown">Unknown</option>
        </select>
        <select value={speciesFilter} onChange={(e) => setSpeciesFilter(e.target.value)}>
          <option value="">Filter by Species</option>
          {Array.from(new Set(characters.map((character) => character.species))).map((species) => (
            <option key={species} value={species}>
              {species}
            </option>
          ))}
        </select>
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="">Filter by Type</option>
          {Array.from(new Set(characters.map((character) => character.type))).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="character-grid">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharactersPage;




