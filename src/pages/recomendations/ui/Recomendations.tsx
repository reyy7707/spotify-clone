import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Recommendations.css';
import { Footer } from '../../../widgets/footer';

const Recommendations: React.FC = () => {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const accessToken = localStorage.getItem('spotifyAccessToken');

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/recommendations', {
          params: {
            seed_genres: 'pop',
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setRecommendations(response.data.tracks);
      } catch (error) {
        console.error('Error fetching recommendations', error);
      }
    };
    fetchRecommendations();
  }, [accessToken]);

  return (
    <>
      <div className='block'>
        <div className="recommendations">
          <h2>Recommended Tracks</h2>
          <ul className="track-list">
            {recommendations.slice(0, 9).map((track: any) => (
              <li key={track.id} className="track-item">
                <div className="track-cover">
                  <img src={track.album.images[0]?.url} alt={track.name} className="cover-image2" />
                </div>
                <div className="track-info">
                  <audio controls className="audio-player">
                    <source src={track.preview_url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <p className="track-name">{track.name}</p>
                  <p className="track-artist">{track.artists.map((artist: any) => artist.name).join(', ')}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='footer-margin'>
          <Footer />
        </div>
      </div>
    </>

  );
};

export default Recommendations;
