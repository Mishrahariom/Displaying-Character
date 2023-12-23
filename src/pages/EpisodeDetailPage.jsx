import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import EpisodeDetail from '../components/EpisodeGrid/EpisodeDetail';

const EpisodeDetailPage = () => {
  const [episode, setEpisode] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
        setEpisode(response.data);
      } catch (error) {
        console.log('Error fetching episode details:', error);
      }
    };

    fetchEpisode();
  }, [id]);

  if (!episode) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 style={{"textAlign": "center"}}>Episode Details</h2>
      <EpisodeDetail episode={episode} />
    </div>
  );
};

export default EpisodeDetailPage;
