import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash.substring(1).split('&').reduce((initial: any, item) => {
      const parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');

    if (accessToken) {
      localStorage.setItem('spotifyAccessToken', accessToken);
      window.location.hash = '';
    } else {
      console.error('No access token found in URL');
    }

    console.log('Hash:', hash);

    if (hash.access_token) {
      localStorage.setItem('spotifyAccessToken', hash.access_token);
      navigate('/profile');
    } else {
      navigate('/');
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default Callback;
