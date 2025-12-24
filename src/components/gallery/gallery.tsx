"use client";

import { gallery } from "@/data/gallery";
import Image from "next/image";
import { motion, spring } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: spring, stiffness: 200, damping: 15, duration: 0.6 },
  },
  whileHover: { scale: 1.05 },
};

const GalleryImages = () => {
  return (
    <div className="flex items-center justify-center pb-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex w-full flex-col items-center px-4"
      >
        <div className="flex max-w-4/5 flex-wrap place-content-center items-center gap-4">
          {gallery.map(({ image, alt }, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Image
                src={image}
                alt={alt}
                className="h-auto w-full rounded-lg object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default GalleryImages;
