interface EventsProps {
  day: string;
  time: string;
  location: string;
  description: string;
}
const Event = ({ day, time, location, description }: EventsProps) => {
  return (
    <div className="bg-pickleball-green-100 items-left flex h-screen w-screen flex-col">
      <div className="bg-pickleball-lime-100 text-pickleball-green-100 mt-50 ml-50 h-1/17 w-1/6 space-y-3 rounded-lg py-2.5 text-center text-xl font-bold">
        {day}s
      </div>
      <div className="text-pickleball-lime-100 mx-50 my-5 text-left text-lg font-light">
        Every {day} | @{time} <br />
        {location}
      </div>
      <div className="text-pickleball-lime-100 mx-50 w-1/7 text-left text-sm font-light text-balance">
        {description}
      </div>
    </div>
  );
};

export default Event;
