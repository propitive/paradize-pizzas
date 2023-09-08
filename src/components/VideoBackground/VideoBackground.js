import pizzaVideo from "../../images/production_id_3752507 (1080p) (1).mp4";

function VideoBackground() {
  return (
    <div className="video-background">
      <video
        className="video-background__video"
        src={pizzaVideo}
        autoPlay
        loop
        muted
      />
    </div>
  );
}

export default VideoBackground;
