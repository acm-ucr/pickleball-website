"use client";

import { boardData } from "@/data/board";
import Card from "@/components/board/card";
import { motion } from "motion/react";

const dropIn = (index: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { y: 0, opacity: 1 },
  transition: { delay: index * 0.2, duration: 0.5 },
  viewport: { once: true },
});

const Board = () => {
  const topMembers = boardData.slice(0, 2);
  const otherMembers = boardData.slice(2);

  return (
    <div className="flex flex-col items-center gap-2 space-y-16 py-8">
      <div className="flex flex-col justify-center gap-24 sm:flex-row">
        {topMembers.map(({ name, image, position }, index) => (
          <motion.div key={index} {...dropIn(index)}>
            <Card name={name} image={image} position={position} />
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col justify-center gap-20 sm:flex-row">
        {otherMembers.map(({ name, image, position }, index) => (
          <motion.div key={index} {...dropIn(index)}>
            <Card name={name} image={image} position={position} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Board;
