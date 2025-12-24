"use client";

import { motion, spring, easeIn } from "motion/react";
import Button from "@/components/home/button";

const ButtonPopUp = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
  },
  hover: { scale: 1.05 },
  viewport: { once: true },
  transition: { type: spring, bounce: 0.45, delay: 1.1 },
};

const titleAnimation = (index: number) => ({
  initial: { opacity: 0, scale: 3 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: {
    delay: index * 0.5,
    duration: 0.7,
    type: spring,
    bounce: 0.55,
  },
});

const descriptionAnimation = {
  initial: { y: -25, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { ease: easeIn, delay: 0.9 },
  viewport: { once: true },
};

const ReadyToJoin = () => {
  return (
    <div className="bg-pickleball-green-200 text-pickleball-lime-100 flex w-full justify-center px-4 py-[12vh] sm:px-8">
      <div className="flex flex-col items-center gap-y-8 text-center sm:gap-y-[5vh]">
        <div className="text-4xl font-bold sm:text-5xl">
          {"READY TO JOIN?".split(" ").map((word, index) => (
            <motion.p
              key={index}
              {...titleAnimation(index)}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.p>
          ))}
        </div>
        <motion.p
          {...descriptionAnimation}
          className="max-w-xs text-center text-base sm:max-w-2xl sm:text-lg"
        >
          Join the Pickleball Club at UCR to play, learn, and connect with a
          welcoming community of players. Whether you're a beginner or a
          seasoned competitor, come have fun, stay active, and be part of the
          game!
        </motion.p>
        <motion.div className="flex w-full" {...ButtonPopUp}>
          <Button
            textColor="text-white"
            background="bg-blue-500"
            borderColor="border-none"
            text="Highlander Link Application"
            link="https://highlanderlink.ucr.edu/organization/pickleball"
          />
        </motion.div>
        <motion.div className="flex w-full" {...ButtonPopUp}>
          <Button
            textColor="text-blue-500"
            background="bg-white"
            borderColor="border-none"
            text="Recreational Pickleball Club Application"
            link="/404"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ReadyToJoin;
