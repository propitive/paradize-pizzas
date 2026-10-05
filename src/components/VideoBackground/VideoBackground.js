import { useEffect, useRef, useState } from "react";
import pizzaVideo from "../../images/production_id_3752507 (1080p) (1).mp4";
import pizzaPicture from "../../images/featured/stillPizzaShot.png";

function VideoBackground() {
  const videoRef = useRef(null);
  const [showPlayButton, setShowPlayButton] = useState(false);

  const startVideo = () => {
    const video = videoRef.current;
    // Set the DOM properties explicitly before requesting playback in Safari.
    video.muted = true;
    video.defaultMuted = true;
    return video.play().catch(() => setShowPlayButton(true));
  };

  useEffect(() => {
    startVideo();
  }, []);

  return (
    <div className="video-background">
      <video
        ref={videoRef}
        className="video-background__video"
        src={pizzaVideo}
        autoPlay
        loop
        muted
        playsInline
        poster={pizzaPicture}
        preload="auto"
        onPlaying={() => setShowPlayButton(false)}
        onPause={() => setShowPlayButton(true)}
        aria-label="Pizza being prepared in a brick oven"
      />
      {showPlayButton && (
        <button
          type="button"
          className="video-background__play-button"
          onClick={startVideo}
        >
          Play video
        </button>
      )}
    </div>
  );
}

export default VideoBackground;
