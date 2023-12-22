// src/pages/CharacterDetailPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams

import CharacterDetail from '../components/CharacterGrid/CharacterDetail';

const CharacterDetailPage = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams(); // Use useParams hook to get the parameters

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(response.data);
      } catch (error) {
        console.log('Error fetching character details:', error);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 style={{"textAlign": "center"}}>Character Details</h2>
      <CharacterDetail character={character} />
    </div>
  );
};

export default CharacterDetailPage;




// // src/pages/CharacterDetailPage.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import CharacterDetail from '../components/CharacterGrid/CharacterDetail';

// const CharacterDetailPage = ({ match }) => {
//   const [character, setCharacter] = useState(null);
//   const characterId = match.params.id;

//   useEffect(() => {
//     const fetchCharacter = async () => {
//       try {
//         const response = await axios.get(`https://rickandmortyapi.com/api/character`);
//         setCharacter(response.data);
//       } catch (error) {
//         console.error('Error fetching character details:', error);
//       }
//     };

//     fetchCharacter();
//   }, [characterId]);

//   if (!character) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h2>Character Details</h2>
//       <CharacterDetail character={character} />
//     </div>
//   );
// };

// export default CharacterDetailPage;
