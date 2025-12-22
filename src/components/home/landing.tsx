"use client";

import Image from "next/image";
import logo from "@/public/images/logo_transparent_2.webp";
import { motion } from "motion/react";

const fadeInUp = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
};

const fadeInUpProps = {
  variants: fadeInUp,
  initial: "initial",
  whileInView: "whileInView",
  viewport: { once: true },
};

const Landing = () => {
  return (
    <motion.div
      className="flex min-h-screen w-full items-center justify-center py-12"
      {...fadeInUpProps}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0 }}
    >
      <div className="flex w-full flex-col items-center justify-center gap-y-6 px-4 sm:gap-y-8 md:w-3/4 lg:w-1/2">
        <Image
          src={logo}
          alt="Logo"
          className="h-auto w-1/2 sm:w-1/3 md:w-1/4"
        />
        <motion.p
          className="text-pickleball-lime-100 text-3xl font-bold sm:text-4xl md:text-5xl"
          {...fadeInUpProps}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
        >
          Like to Pickle?
        </motion.p>
        <motion.p
          className="text-pickleball-lime-100 text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
          {...fadeInUpProps}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        >
          PICKLEBALL@UCR
        </motion.p>
        <motion.p
          className="text-pickleball-lime-100 max-w-xl text-center text-base sm:text-lg"
          {...fadeInUpProps}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
        >
          Welcome to the Pickleball Club at the University of California,
          Riverside! We offer recreational pickleball for students, staff, and
          faculty. Join us to improve your pickleball skills, enjoy social
          events, and make new connections. Open to all skill levels!
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Landing;
