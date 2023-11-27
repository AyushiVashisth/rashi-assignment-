import React, { useEffect, useRef, useState } from 'react';
import link from "../static/media/pexels-peter-fowler-6394054 (Original).mp4"

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
 console.log(videoUrl)
  // const togglePlay = () => {
  //   if (videoRef.current.paused) {
  //     videoRef.current.play();
  //   } else {
  //     videoRef.current.pause();
  //   }
  //   setIsPlaying(!isPlaying);
  // };
useEffect(()=>{

},[videoUrl])
  return (
    <div className="video-player-container">
      <video ref={videoRef} className="w-full" autoPlay controls>
        <source src={link} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <button
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
        onClick={togglePlay}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button> */}
    </div>
  );
};

export default VideoPlayer;