"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Calendar } from "../ui/calendar";

const CalendarCall = () => {
  return (
    <div className="w-full">
      <Calendar />
    </div>
  );
};

export default CalendarCall;
