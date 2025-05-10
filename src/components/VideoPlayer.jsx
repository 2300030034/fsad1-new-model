import React, { useRef, useEffect, useState } from 'react';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Reload the video when src changes
    }
  }, [src]);

  const handleError = (e) => {
    console.error('Error loading video:', e);
    setError('Failed to load video. Please try again.');
  };

  const handleLoad = () => {
    setError(null);
  };

  return (
    <div className="relative w-full bg-black">
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white p-4">
          {error}
        </div>
      )}
      <video
        ref={videoRef}
        className="w-full h-[500px]"
        controls
        playsInline
        autoPlay
        onError={handleError}
        onLoadedData={handleLoad}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;