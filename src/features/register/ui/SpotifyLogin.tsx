import React from 'react';
import './SpotifyLogin.css'

const SpotifyLogin: React.FC = () => {
  const clientId = '4d743b4bfb6143f59fd4fba648f12cff';
  const redirectUri = 'http://localhost:3000/callback/';

  const loginUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent('user-read-private user-read-email playlist-read-private')}`;

  return (
    <div className='login-register'>
      <button className='login-button'>
        <a className='login-text' href={loginUrl}>Login with Spotify</a>
      </button>
    </div>
  );
};

export default SpotifyLogin;
