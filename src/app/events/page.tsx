import Header from "@/components/header";
import WeekEvents from "@/components/events/events";
import CalendarCall from "@/components/calendar/calendarcall";

const Events = () => {
  return (
    <>
      <Header>Events</Header>
      <WeekEvents />
      <CalendarCall />
    </>
  );
};

export default Events;
