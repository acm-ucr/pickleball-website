"use client";

import { motion } from "motion/react";
import Button from "@/components/home/button";

const ButtonPopUp = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
  },
  hover: { scale: 1.05 },
};

const ReadyToJoin = () => {
  return (
    <div className="bg-pickleball-green-200 text-pickleball-lime-100 flex w-full justify-center px-4 py-[12vh] sm:px-8">
      <div className="flex flex-col items-center gap-y-8 text-center sm:gap-y-[5vh]">
        <div className="text-4xl font-bold sm:text-5xl">
          {"READY TO JOIN?".split(" ").map((word, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, scale: 3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.5,
                duration: 0.7,
                type: "spring",
                bounce: 0.55,
              }}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.p>
          ))}
        </div>
        <motion.p
          initial={{ y: -25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeIn", delay: 0.9 }}
          viewport={{ once: true }}
          className="max-w-xs text-center text-base sm:max-w-2xl sm:text-lg"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
        </motion.p>
        <motion.div
          className="flex w-full"
          variants={ButtonPopUp}
          viewport={{ once: true }}
          initial="initial"
          whileInView="animate"
          transition={{ type: "spring", bounce: 0.45, delay: 1.1 }}
          whileHover="hover"
        >
          <Button
            textColor="text-white"
            background="bg-blue-500"
            borderColor="border-black"
            text="Highlander Link Application"
            link="https://highlanderlink.ucr.edu/organization/pickleball"
          />
        </motion.div>
        <motion.div
          className="flex w-full"
          variants={ButtonPopUp}
          viewport={{ once: true }}
          initial="initial"
          whileInView="animate"
          transition={{ type: "spring", bounce: 0.45, delay: 1.1 }}
          whileHover="hover"
        >
          <Button
            textColor="text-blue-500"
            background="bg-white"
            borderColor="border-blue-500"
            text="Recreational Pickleball Club Application"
            link="/"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ReadyToJoin;
