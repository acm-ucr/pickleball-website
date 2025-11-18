import Header from "@/components/header";
import WeekEvents from "@/components/events/events";
import CalendarCall from "@/components/calendar/calendarcall";

const Events = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Header title="Events" />
      <WeekEvents />
      <CalendarCall />
    </div>
  );
};

export default Events;
