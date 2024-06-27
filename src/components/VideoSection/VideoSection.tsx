import { useState } from "react";
import "./VideoSection.scss";
import videoSrc from "../../assets/video/sectionVideo.mp4";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="video-section">
      {!isPlaying ? (
        <div className="video-container">
          <video className="full-video" src={videoSrc} />
          <button className="play-button" onClick={handlePlay}>
            ▶
          </button>
        </div>
      ) : (
        <iframe
          className="full-iframe"
          src={videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </section>
  );
};

export default VideoSection;
