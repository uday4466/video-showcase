"use client";
import React, { useRef, useState } from 'react';

const VideoCard = ({ title, src }) => {
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(false); // Track play/pause status
  const [volume, setVolume] = useState(1); // Track volume level (default: 100%)

  
  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  
  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  
  const handleFullScreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen(); 
    } else if (videoRef.current.mozRequestFullScreen) {
      videoRef.current.mozRequestFullScreen(); 
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen(); 
    }
  };

  
  const handleForward = () => {
    videoRef.current.currentTime += 10;
  };

  
  const handleBackward = () => {
    videoRef.current.currentTime -= 10;
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gray-800 text-white">
      {/* Video Player */}
      <video ref={videoRef} className="w-full rounded mb-2">
        <source src={src} type="video/mp4" />
        
      </video>

      {/* Video Title */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-4">{title}</div>

        {/* Custom Controls */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            {/* Play/Pause Button */}
            {!isPlaying ? (
              <button
                onClick={handlePlay}
                className=" bg-gray-800 px-4 py-2 rounded hover:bg-gray-800"
              >
                ▶️ Play
              </button>
            ) : (
              <button
                onClick={handlePause}
                className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-800"
              >
                ⏸ Pause
              </button>
            )}

            {/* Volume Control */}
            <div className="flex items-center">
              <label htmlFor="volume" className="mr-2 text-sm">
                Volume:
              </label>
              <input
                id="volume"
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24"
              />
            </div>
          </div>

          {/* Forward/Backward and Fullscreen Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={handleBackward}
              className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-800"
            >
              ⏪ Backward 
            </button>
            <button
              onClick={handleForward}
              className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-800"
            >
              ⏩ Forward 
            </button>
            <button
              onClick={handleFullScreen}
              className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-800"
            >
              ⛶ Full Screen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
