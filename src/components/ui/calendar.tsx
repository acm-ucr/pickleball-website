"use client";
import React, { useState } from "react";
import CalendarHeader from "../calendar/calendarHeader";
import { DayPicker, Modifiers, CalendarDay } from "react-day-picker";

export interface GoogleEventProps {
  start: {
    dateTime?: string;
  };
  end: {
    dateTime?: string;
  };
  location: string;
  description: string;
  summary: string;
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
  events: CalendarEventProps[];
  day: CalendarDay;
  modifiers: Modifiers;
}

const Day = ({ events, day, modifiers, ...tdprops }: DayProps) => {
  const { date } = day;
  const { today, outside } = modifiers;

  const filteredEvents = events?.filter(({ start, end }) => {
    if (!start || !end) {
      return false;
    }
    const startDate = new Date(start);
    const endDate = new Date(end);

    startDate?.setHours(0, 0, 0, 0);
    endDate?.setHours(23, 59, 59, 999);

    return date >= startDate && date <= endDate;
  });

  return (
    <td
      {...tdprops}
      className={`border-pickleball-blue-100 hide hide-scrollbar flex h-[18vh] flex-col items-end justify-start overflow-y-scroll border ${today ? "bg-blue-100" : "bg-white"}`}
    >
      <div
        className={`pt-1 pr-2 text-sm md:text-4xl ${outside ? "text-gray-400" : "text-black"}`}
      >
        {date.getDate()}
      </div>

      {filteredEvents?.map(({ title, start, location }, index) => {
        const eventDate = new Date(start as string);
        if (
          eventDate.getDate() === date.getDate() &&
          eventDate.getMonth() === date.getMonth() &&
          eventDate.getFullYear() === date.getFullYear()
        ) {
          return (
            <div
              key={index}
              className="text-pickleball-blue-100 flex w-full flex-col px-1 text-center text-xs font-semibold lg:text-base"
            >
              <div className="w-full overflow-hidden text-ellipsis">
                {title}
              </div>
              <div>
                {start
                  ? new Date(start).toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "numeric",
                    })
                  : ""}
              </div>
              <div className="w-full overflow-hidden text-ellipsis">
                {location}
              </div>
            </div>
          );
        }
      })}
    </td>
  );
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  events,
  ...props
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    newDate.setDate(
      today.getMonth() === newDate.getMonth() &&
        today.getFullYear() === newDate.getFullYear()
        ? today.getDate()
        : 1,
    );
    setCurrentDate(newDate);
  };

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    newDate.setDate(
      today.getMonth() === newDate.getMonth() &&
        today.getFullYear() === newDate.getFullYear()
        ? today.getDate()
        : 1,
    );
    setCurrentDate(newDate);
  };

  return (
    <div className="flex w-full flex-col items-center gap-8 pb-8">
      <CalendarHeader
        date={currentDate}
        onNextMonth={nextMonth}
        onPrevMonth={prevMonth}
      />
      <DayPicker
        month={currentDate}
        showOutsideDays={showOutsideDays}
        formatters={{
          formatWeekdayName: (date) =>
            date.toLocaleString("default", { weekday: "short" }),
          formatCaption: () => "",
        }}
        className={`${className} w-4/5`}
        classNames={{
          month: "flex items-center justify-center w-full",
          weekday:
            "flex items-center justify-center md:text-3xl text-xl text-center md:px-8 md:py-6 px-4 py-3",
          weekdays:
            "grid grid-cols-7 bg-white text-pickleball-blue-100 rounded-t-2xl border border-pickleball-blue-100 border-1",
          week: "grid grid-cols-7 w-full",
          button_next: "hidden",
          button_previous: "hidden",
          ...classNames,
        }}
        components={{
          Day: (props) => <Day {...props} events={events} />,
        }}
        {...props}
      />
    </div>
  );
}

export { Calendar };
