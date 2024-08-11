import React from 'react';
import { Link } from 'react-router-dom';
import './Saidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/playlist">Playlists</Link></li>
        <li><Link to="/register">Sign in</Link></li>
        <li><Link to="/personal-area">Profile</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
