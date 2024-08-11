import React, { useState } from 'react';
import axios from 'axios';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const accessToken = localStorage.getItem('spotifyAccessToken');

  const search = async () => {
    const response = await axios.get(`https://api.spotify.com/v1/search`, {
      params: {
        q: query,
        type: 'track,album,artist,playlist',
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setResults(response.data.tracks.items);
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for music..." 
      />
      <button onClick={search}>Search</button>

      <ul>
        {results.map((result: any) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
