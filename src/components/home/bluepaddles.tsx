"use client";

import { motion } from "motion/react";
import Image from "next/image";
import bluePaddle from "@/public/colored-paddle-ball.svg";

const BluePaddle = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        y: [0, -20, 0],
        x: [0, -3, 3, -3, 0],
        rotate: [0, -5, 5, -5, 0],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
      }}
    >
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
