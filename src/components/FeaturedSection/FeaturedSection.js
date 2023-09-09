import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { featuredPhotos } from "../../utils/constants.js";

function FeaturedSection() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="carousel__container">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
        style={{ flexFlow: "row", overflowX: "scroll" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="carousel__inner"
        >
          {featuredPhotos.map((image, i) => {
            return (
              <motion.div className="carousel__image-div" key={i}>
                <img className="carousel__image" src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default FeaturedSection;
