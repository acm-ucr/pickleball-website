"use client";
import Paddle from "@/components/home/paddle";
import { paddles } from "@/data/paddle";
import { motion } from "motion/react";

const paddleAnimation = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: [0, -60, 0, -5, 0],
    transition: {
      duration: 1.0,
    },
  },
};

const Paddles = () => {
  return (
    <div className="xl:flex-flow mt-16 flex flex-col items-center justify-center xl:flex-wrap">
      <div className="m-5 flex flex-col items-center justify-center xl:flex-row">
        {paddles.slice(0, 3).map(({ text, number }, index) => (
          <motion.div
            key={index}
            variants={paddleAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Paddle key={index} text={text} number={number} />
          </motion.div>
        ))}
      </div>
      <div className="lmr-8 m-5 -mt-5 flex flex-col items-center justify-center xl:-mt-60 xl:flex-row">
        {paddles.slice(3).map(({ text, number }, index) => (
          <motion.div
            key={index + 3}
            variants={paddleAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Paddle
              key={index + 3}
              text={text}
              number={number}
              rotated={true}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Paddles;
