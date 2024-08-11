import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { useParams, Link } from 'react-router-dom';
import './PlaylistDetail.css';

const PlaylistDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [playlist, setPlaylist] = useState<any>(null);
  const [tracks, setTracks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const accessToken = localStorage.getItem('spotifyAccessToken');

  useEffect(() => {
    const fetchPlaylist = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setPlaylist(response.data);
        setTracks(response.data.tracks.items);
      } catch (error) {
        console.error('Error fetching playlist', error);
        setError('Failed to load playlist. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (accessToken) {
      fetchPlaylist();
    } else {
      setError('Access token is missing. Please log in again.');
      setLoading(false);
    }
  }, [id, accessToken]);

  return (
    <div className="playlist-detail">
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {playlist && !loading && !error && (
        <>
          <Link className='playlist-link' to={'/'}>
            <h2>{playlist.name}</h2>
          </Link>
          <div className="playlist-info">
            <img
              src={playlist.images[0]?.url || 'https://via.placeholder.com/300'}
              alt={playlist.name}
              className="playlist-cover"
            />
            <p className="playlist-description">{playlist.description}</p>
          </div>
          <ul className="track-list">
            {tracks.map((track: any) => (
              <li key={track.track.id} className="track-item">
                <div className="track-info">
                  <ReactPlayer
                    url={track.track.preview_url}
                    controls
                    width="100%"
                    height="50px"
                    className="track-player"
                  />
                  <p className="track-name">{track.track.name}</p>
                  <p className="track-artist">{track.track.artists.map((artist: any) => artist.name).join(', ')}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default PlaylistDetail;
