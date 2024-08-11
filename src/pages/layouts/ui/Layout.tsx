import React, { useEffect } from 'react';
import { Sidebar } from '../../../features/saidbar';
import { Recommendations } from '../../recomendations';
import { Playlists } from '../../playlist';
import { useNavigate } from 'react-router-dom';
import './Layout.css';

const Layout: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('spotifyAccessToken')) {
      navigate('/register')
    } else {
      console.log('verify');
    }
  }, [])

  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content">
        <Recommendations />
        <Playlists />
      </main>
    </div>
  );
};

export default Layout;
