import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import link from "../static/media/pexels-peter-fowler-6394054 (Original).mp4"
// 1.pexels-mikhail-nilov-6981411 (1080p).mp4 - 4494d7bc38401086a92e
// 2.pexels-peter-fowler-6394054 (Original).mp4 - 419555a97ac6b659e560
//3.video (2160p).mp4 - 2355c1882edae85c80a3
console.log("link",link)

const VideoPlayer = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    // Whenever videoUrl changes, reset the player
    setIsPlaying(false);
    console.log(url)
  }, [url]);

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div className="video-player-container">
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={isPlaying}
        controls
        width="100%"
        height="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
      <button
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
        onClick={handlePlayPause}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default VideoPlayer;
