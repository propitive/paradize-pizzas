import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function FeaturedSection() {
  return (
    <motion.div classname="carousel">
      <motion.div classname="carousel__inner"></motion.div>
    </motion.div>
  );
}

export default FeaturedSection;
