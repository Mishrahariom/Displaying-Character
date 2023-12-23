import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import EpisodeCard from '../components/EpisodeGrid/EpisodeCard';

const EpisodePage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/episode', {
          params: { name: searchTerm }
        });
        setEpisodes(response.data.results);
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    fetchEpisodes();
  }, [searchTerm]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Rick and Morty Episodes</h2>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search by episode name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="episode-grid">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
};

export default EpisodePage;

