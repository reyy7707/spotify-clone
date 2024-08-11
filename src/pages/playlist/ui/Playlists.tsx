import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Playlists.css'; 

const Playlists: React.FC = () => {
  const [playlists, setPlaylists] = useState<any[]>([]);
  const accessToken = localStorage.getItem('spotifyAccessToken');

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setPlaylists(response.data.items);
      } catch (error) {
        console.error('Error fetching playlists', error);
      }
    };
    fetchPlaylists();
  }, [accessToken]);

  return (
    <div className="playlists1">
      <Link className='playlist-link' to={'/'}>
        <h2>Your Playlists</h2>
      </Link>
      <ul className="playlist-list1">
        {playlists.map((playlist: any) => (
          <li key={playlist.id} className="playlist-item1">
            <Link to={`/playlist/${playlist.id}`} className="playlist-link">
              <div className="playlist-cover1">
                <img
                  src={playlist.images[0]?.url || 'https://via.placeholder.com/150'}
                  alt={playlist.name}
                  className="cover-image1"
                />
              </div>
              <div className="playlist-info1">
                <p className="playlist-name1">{playlist.name}</p>
                <p className="playlist-tracks1">{playlist.tracks.total} tracks</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlists;
