"use client";
import React, { useState } from "react";
import CalendarHeader from "../calendar/calendarHeader";
import { DayPicker, CalendarDay, Modifiers } from "react-day-picker";

export interface GoogleEventProps {
  start: { dateTime?: Date };
  end: { dateTime?: Date };
  location: string;
  description: string;
  summary?: string;
}

export interface CalendarEventProps {
  start: string;
  end: string;
  location: string;
  description: string;
  title: string;
}

type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: CalendarEventProps[];
};

interface DayProps extends React.ComponentProps<"td"> {
  day: CalendarDay;
  events: CalendarEventProps[];
  modifiers: Modifiers;
}

const Day = ({ day, events, modifiers, ...tdprops }: DayProps) => {
  const { date } = day;
  const { outside } = modifiers;

  const filteredEvents = events?.filter(({ start, end }) => {
    if (!start || !end) return false;
    const startDate = new Date(start);
    const endDate = new Date(end);

    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);

    return date >= startDate && date <= endDate;
  });

  return (
    <td
      {...tdprops}
      className="border-pickleball-blue-100 flex flex-col items-end justify-start border bg-white pb-8"
    >
      <div
        className={`hidden pt-1 pr-2 pb-4 text-4xl md:block ${outside ? "text-gray-300" : "text-black"}`}
      >
        {date.getDate()}
      </div>
      {filteredEvents?.map(({ title, start }, index) => {
        const eventDate = new Date(start as string);
        if (
          eventDate.getDate() === date.getDate() &&
          eventDate.getMonth() === date.getMonth() &&
          eventDate.getFullYear() === date.getFullYear()
        ) {
          return (
            <div key={index} className="w-full bg-white text-center text-4xl">
              {title} at{" "}
              {start
                ? new Date(start).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : ""}
            </div>
          );
        }
      })}
      <div className={`md:hidden ${outside ? "text-gray-300" : "text-black"}`}>
        {date.getDate()}
      </div>
    </td>
  );
};

function Calendar({ events }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  return (
    <div className="flex w-full flex-col items-center gap-8 py-8">
      <CalendarHeader
        date={currentDate}
        onNextMonth={nextMonth}
        onPrevMonth={prevMonth}
      />
      <DayPicker
        month={currentDate}
        showOutsideDays={true}
        className="w-3/4"
        formatters={{
          formatWeekdayName: (date) =>
            date.toLocaleString("default", { weekday: "short" }),
        }}
        classNames={{
          root: "w-3/4 pb-8",
          month: "w-full flex items-center justify-center",
          months: "flex w-full",
          weekday:
            "flex w-full items-center justify-center text-3xl text-center px-8 py-6",
          weekdays:
            "grid grid-cols-7 w-full bg-white text-pickleball-blue-100 rounded-t-2xl border border-pickleball-blue-100 border-1",
          week: "grid grid-cols-7 w-full ",
          button_next: "hidden",
          button_previous: "hidden",
          caption_label: "hidden",
        }}
        components={{
          Day: (props) => <Day {...props} events={events} />,
        }}
      />
    </div>
  );
}

export { Calendar };
