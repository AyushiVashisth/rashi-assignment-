import React, { useState, useEffect } from "react";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:1111/posts/videos/stream");
        const data = await response.json();
        setVideos(data.docs);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, []);

  const handleVideoChange = (direction) => {
    if (direction === "next") {
      setCurrentVideoIndex((currentVideoIndex + 1) % videos.length);
    } else if (direction === "prev") {
      setCurrentVideoIndex((prevIndex) =>
        prevIndex === 0 ? videos.length - 1 : prevIndex - 1
      );
    }
  };

  const handleWheelScroll = (event) => {
    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      // Scrolling down
      handleVideoChange("next");
    } else if (delta < 0) {
      // Scrolling up
      handleVideoChange("prev");
    }
  };

  return (
    <div onWheel={handleWheelScroll}>
      <h1 className="text-2xl font-bold mb-4">Video Playlist</h1>
      {videos.length > 0 && (
        <div>
          <VideoPlayer
            key={currentVideoIndex}
            url={`/static/media/${videos[currentVideoIndex].media[0].filename.replace(
              /\.mp4$/,
              `.${getReplacementValue(videos[currentVideoIndex].media[0].filename)}.mp4`
            )}`}
            width="100%"
            height="auto"
            controls
            playing
          />

          <div className="mt-4">
            <button
              className="mr-2 bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
              onClick={() => handleVideoChange("prev")}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
              onClick={() => handleVideoChange("next")}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const getReplacementValue = (filename) => {
  const replacements = {
    "pexels-mikhail-nilov-6981411 (1080p).mp4": "4494d7bc38401086a92e",
    "pexels-peter-fowler-6394054 (Original).mp4": "419555a97ac6b659e560",
    "video (2160p).mp4": "2355c1882edae85c80a3",
  };

  return replacements[filename] || "";
};

export default App;
