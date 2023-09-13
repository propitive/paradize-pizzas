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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        {/* <button className="featured__button">BOOK ONLINE</button> */}

        <button className="featured__button">
          BOOK ONLINE
          <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
            <path
              clip-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default FeaturedSection;
