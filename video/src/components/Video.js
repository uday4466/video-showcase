
import React from 'react';
import VideoCard from './VideoCard';

const Video = ({ videos }) => {
  return (
    <div className="flex flex-wrap">
      {videos.map((video, index) => (
        <VideoCard key={index} title={video.title} src={video.src} />
      ))}
    </div>
  );
};

export default Video;