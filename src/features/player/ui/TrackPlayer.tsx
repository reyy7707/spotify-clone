import React from 'react';

const TrackPlayer: React.FC<{ trackUrl: string }> = ({ trackUrl }) => {
  return (
    <div>
      <iframe
        src={trackUrl}
        width="300"
        height="80"
        frameBorder="0"
        allow="encrypted-media"
      />
    </div>
  );
};

export default TrackPlayer;
