import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SpotifyLogin } from './features/register';
import { UserProfile } from './features/personal-area';
import { Callback } from './features/callback';
import { Playlists } from './pages/playlist';
import { TrackPlayer } from './features/player';
import { Recommendations } from './pages/recomendations';
import { PlaylistDetail } from './pages/playlist-detail';
import { Layout } from './pages/layouts';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path='/register' element={<SpotifyLogin />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="/personal-area" element={<UserProfile />} />
            <Route path="/playlist" element={<Playlists />} />
            <Route path="/player" element={<TrackPlayer trackUrl={''} />} />
            <Route path="/recomendation" element={<Recommendations />} />
            <Route path="/playlist/:id" element={<PlaylistDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
