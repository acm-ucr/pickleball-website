"use client";

import Link from "next/link";
import { motion } from "motion/react";

const floatAnim = {
  y: [0, -12, 0],
  rotate: [0, -2, 0, 2, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
  },
};

const floatAnimOffset = {
  y: [0, -12, 0],
  rotate: [0, -2, 0, 2, 0],
  transition: {
    duration: 3,
    delay: 0.4,
    repeat: Infinity,
  },
};

const NotFound = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <p className="text-pickleball-lime-100 text-9xl">
        <motion.span className="inline-block" animate={floatAnim}>
          4
        </motion.span>
        <motion.span className="inline-block" animate={floatAnimOffset}>
          0
        </motion.span>
        <motion.span className="inline-block" animate={floatAnim}>
          4
        </motion.span>
      </p>
      <p className="mb-5 text-5xl text-white">Page Not Found</p>
      <motion.div
        className="mt-8"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <Link
          href="/"
          className="bg-pickleball-lime-100 text-pickleball-green-200 rounded-full px-12 py-4 text-3xl transition-opacity hover:opacity-70"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
