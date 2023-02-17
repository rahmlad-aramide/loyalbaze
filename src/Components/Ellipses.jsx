import React from "react";
import { motion } from "framer-motion";

const Ellipses = () => {
  return (
    <>
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "-50vw" }}
        transition={{ delay: 1.5, duration: 2 }}
        className="ellipse1 absolute top-[7rem] left-[5%] z-10"
      ></motion.div>
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "50vw" }}
        transition={{ delay: 1.5, duration: 2 }}
        className="ellipse2 absolute right-0 top-20 md:top-28 md:right-[20%]"
      ></motion.div>
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "50vw" }}
        transition={{ delay: 1.5, duration: 2 }}
        className="ellipse3 absolute top-[25rem] -right-[7rem] md:-right-[5%] z-10"
      ></motion.div>
    </>
  );
};

export default Ellipses;
