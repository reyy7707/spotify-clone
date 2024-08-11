import React from 'react';
import { Sidebar } from '../../../features/saidbar';
import { Recommendations } from '../../recomendations';
import { Playlists } from '../../playlist';
import './Layout.css';

const Layout: React.FC = () => {
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
