import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

export interface CalendarHeaderProps {
  date: Date;
  onNextMonth: () => void;
  onPrevMonth: () => void;
}

const CalendarHeader = ({
  date,
  onNextMonth,
  onPrevMonth,
}: CalendarHeaderProps) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="text-pickleball-lime-100 flex w-4/5 flex-col items-center justify-between font-bold md:flex-row md:pb-8">
      <div className="text-3xl md:text-6xl">Calendar</div>
      <div className="flex items-center gap-8 text-center text-2xl md:text-4xl">
        <div onClick={onPrevMonth}>
          <IoArrowBack />
        </div>
        {months[date.getMonth()]} {date.getFullYear()}
        <div onClick={onNextMonth}>
          <IoArrowForward />
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
