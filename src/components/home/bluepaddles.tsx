"use client";

import { motion } from "motion/react";
import Image from "next/image";
import bluePaddle from "@/public/colored-paddle-ball.svg";

const paddleMotion = {
  y: [0, -20, 0],
  x: [0, -3, 3, -3, 0],
  rotate: [0, -5, 5, -5, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
  },
};

const BluePaddle = () => {
  return (
    <motion.div whileInView={paddleMotion}>
      <Image
        src={bluePaddle}
        alt="Blue pickleball paddle"
        width={150}
        height={150}
      />
    </motion.div>
  );
};

export default BluePaddle;
