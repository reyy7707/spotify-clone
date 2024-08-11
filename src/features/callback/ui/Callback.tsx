import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);

    const accessToken = params.get('access_token');
    const tokenType = params.get('token_type');
    const expiresIn = params.get('expires_in');

    if (accessToken) {
      localStorage.setItem('spotifyAccessToken', accessToken);
      localStorage.setItem('spotifyTokenType', tokenType || 'Bearer');
      localStorage.setItem('spotifyExpiresIn', expiresIn || '3600');

      window.history.replaceState({}, document.title, window.location.pathname);
      navigate('/profile');
    } else {
      console.error('No access token found in URL');
      navigate('/');
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default Callback;
