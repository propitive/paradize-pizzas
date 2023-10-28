import pizzaVideo from "../../images/production_id_3752507 (1080p) (1).mp4";
import pizzaPicture from "../../images/featured/stillPizzaShot.png";

function VideoBackground() {
  return (
    <div className="video-background">
      <video
        className="video-background__video"
        src={pizzaVideo}
        autoPlay
        loop
        muted
        controlslist="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
      />
      <img className="video-background__picture" src={pizzaPicture} />
    </div>
  );
}

export default VideoBackground;
