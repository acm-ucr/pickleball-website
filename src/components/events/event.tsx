interface EventsProps {
  day: string;
  time: string;
  location: string;
  description: string;
}
const Event = ({ day, time, location, description }: EventsProps) => {
  return (
    <div className="items-left W-1/6 flex flex-col gap-10">
      <div className="bg-pickleball-lime-100 text-pickleball-green-100 w-full rounded-lg py-3 text-center text-2xl font-bold">
        {day}s
      </div>
      <div className="text-pickleball-lime-100 text-left text-lg">
        Every {day} | @{time} <br />
        {location}
      </div>
      <div className="text-pickleball-lime-100 w-full text-left text-sm text-balance">
        {description}
      </div>
    </div>
  );
};

export default Event;
