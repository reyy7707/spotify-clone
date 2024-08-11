import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import './SpotifyLogin.css';

const SpotifyLogin: React.FC = () => {
  const clientId = '4d743b4bfb6143f59fd4fba648f12cff';
  const redirectUri = 'https://spotify-02-clone.vercel.app/callback';

  const loginUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent('user-read-private user-read-email playlist-read-private')}`;

  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = Cookies.get('spotify_access_token');
    const tokenType = Cookies.get('spotify_token_type');
    const expiresIn = Cookies.get('spotify_expires_in');

    console.log('Access Token from cookies:', token);
    console.log('Token Type from cookies:', tokenType);
    console.log('Expires In from cookies:', expiresIn);

    if (token) {
      setAccessToken(token);
    }
  }, []);

  return (
    <div className='login-register'>
      <button className='login-button'>
        <a className='login-text' href={loginUrl}>Login with Spotify</a>
      </button>
      {accessToken && <p>Access Token: {accessToken}</p>}
    </div>
  );
};

export default SpotifyLogin;
