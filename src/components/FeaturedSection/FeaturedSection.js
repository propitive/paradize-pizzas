import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { featuredPhotos } from "../../utils/constants.js";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton.js";

function FeaturedSection() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="featured">
      <div className="featured__carousel__container">
        <motion.div
          ref={carousel}
          className="featured__carousel"
          whileTap={{ cursor: "grabbing" }}
          style={{ flexFlow: "row", overflowX: "scroll" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="featured__carousel__inner"
          >
            {featuredPhotos.map((image, i) => {
              return (
                <motion.div className="featured__carousel__image-div" key={i}>
                  <img
                    className="featured__carousel__image"
                    src={image}
                    alt=""
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      <div className="featured__text">
        <h3 className="featured__header">
          Changing the way we think about brick oven pizzas
        </h3>
        <p className="featured__paragraph">
          At Paradize Pizzas, we're not just about pizza; we're about crafting
          mouthwatering masterpieces that are nothing short of extraordinary.
          Imagine a perfect symphony of flavors, a harmony of fresh,
          locally-sourced ingredients, and an oven that turns every pizza into a
          work of art. From classic Margheritas to bold BBQ chicken creations,
          we've perfected the art of pizza-making, and we're here to share our
          passion with you. Join us as we redefine your pizza experience, one
          slice at a time. It's not just pizza; it's a slice of pure indulgence,
          and it's all waiting for you.
        </p>
        <BookOnlineButton className="featured__button" />
      </div>
    </div>
  );
}

export default FeaturedSection;
