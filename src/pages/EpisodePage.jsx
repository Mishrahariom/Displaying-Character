// Pages/EpisodePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import EpisodeCard from '../components/EpisodeGrid/EpisodeCard';

const EpisodePage = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/episode');
        setEpisodes(response.data.results);
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    fetchEpisodes();
  }, []);

  return (
    <div>
      <h2>Rick and Morty Episodes</h2>
      <div className="episode-grid">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
};

export default EpisodePage;
