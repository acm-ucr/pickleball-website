import Header from "@/components/header";
import WeekEvents from "@/components/events/events";
const Events = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <Header title="Events" />
      <WeekEvents />
    </div>
  );
};

export default Events;
