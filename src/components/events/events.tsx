import Event from "@/components/events/event";
const WeekEvents = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-15 pt-20 pb-20 md:flex-row md:gap-25">
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
    </div>
  );
};
export default WeekEvents;
