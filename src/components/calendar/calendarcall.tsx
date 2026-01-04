"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Calendar, CalendarEventProps, GoogleEventProps } from "../ui/calendar";
import Header from "../header";

const CalendarCall = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const { data, isLoading } = useQuery({
    queryKey: ["googleCalendarEvents"],
    queryFn: async () => {
      const timeMin = new Date(
        new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();
      const timeMax = new Date(
        new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();

      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
        }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${timeMin}&timeMax=${timeMax}`,
      ).then((res) => res.json());

      const events: CalendarEventProps[] = response.items.map(
        ({ start, end, location, description, summary }: GoogleEventProps) => ({
          start: start.dateTime,
          end: end.dateTime,
          location,
          description,
          title: summary,
        }),
      );
      return { events };
    },
  });

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="items-center pb-8 text-center">
          <Header>Calendar</Header>
        </div>
      ) : (
        <Calendar
          mode="single"
          className=""
          selected={date}
          onSelect={(day) => setDate(day)}
          showOutsideDays={true}
          events={data?.events ?? []}
          required={true}
        />
      )}
    </div>
  );
};

export default CalendarCall;
