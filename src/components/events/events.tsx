"use client";
import Event from "@/components/events/event";
import { motion } from "motion/react";
const WeekEvents = () => {
  return (
    <motion.div
      className="flex w-full flex-col items-center justify-center gap-15 pt-20 pb-20 md:flex-row md:gap-25"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
    >
      <Event
        day="Monday"
        time="8pm"
        location="UCR SRC Pickleball Courts"
        description="Come out and play! Join us for a fun, soical day of pickleball open to all players-beginners to advanced. Enjoy casual games, meet fellow players, and have a great time on the courts."
      />

      <Event
        day="Thursday"
        time="6:30pm"
        location="UCR SRC Pickleball Courts"
        description="Come out and play! Join us for a fun, social day of pickleball open to all players-beginners to advanced. Enjoy casual games, meet fellow players, and have a great time on the courts."
      />
    </motion.div>
  );
};
export default WeekEvents;
