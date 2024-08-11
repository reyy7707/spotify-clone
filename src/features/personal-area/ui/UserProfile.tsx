import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserProfile.css';
import { Link } from 'react-router-dom';

const UserProfile: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [playlists, setPlaylists] = useState<any[]>([]);
  const accessToken = localStorage.getItem('spotifyAccessToken');

  useEffect(() => {
    if (accessToken) {
      axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }).then(response => {
        setUserData(response.data);
      }).catch(error => {
        console.error('Error fetching user data', error);
      });

      axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }).then(response => {
        setPlaylists(response.data.items);
      }).catch(error => {
        console.error('Error fetching playlists', error);
      });
    }
  }, [accessToken]);

  return (
    <div className="user-profile">
      {userData ? (
        <>
          <div className="profile-header">
            <img src={userData.images[0]?.url} alt="Profile" className="profile-picture" />
            <h1 className="profile-name">{userData.display_name}</h1>
            <p className="profile-email">{userData.email}</p>
            <p className="profile-followers">
              {userData.followers?.total} Followers
            </p>
            <p className="profile-product">
              Product: {userData.product.charAt(0).toUpperCase() + userData.product.slice(1)}
            </p>
          </div>
          <div className="profile-playlists1">
            <h2>My Playlists</h2>
            <ul className="playlist-list">
              {playlists.map((playlist: any) => (
                <li key={playlist.id} className="playlist-item1">
                  <Link to={`/playlist/${playlist.id}`} className="playlist-link">
                    <img src={playlist.images[0]?.url} alt={playlist.name} className="playlist-cover2" />
                    <p className="playlist-name1">{playlist.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UserProfile;
