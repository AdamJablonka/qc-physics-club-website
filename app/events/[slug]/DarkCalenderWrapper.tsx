"use client";
import Calendar from "react-calendar";
import { styled } from "@mui/material/styles";
interface DarkCalenderWrapperProps {
  eventDate: Date;
}

const DarkStyledCalendar = styled(Calendar)(({ theme }) => ({
  ...(theme.palette.mode === "dark" && {
    background: "#424242 !important",
    color: "#e0e0e0 !important",
    "& .react-calendar__tile--active": {
      background: "#536dfe !important",
      color: "#ffffff !important",
    },
    "& .react-calendar__navigation button, & .react-calendar__month-view__days__day--weekend":
      {
        color: "#bbdefb !important",
      },
    "& .react-calendar__tile--now": {
      background: "#1e88e5 !important",
      color: "#ffffff !important",
    },
  }),
}));

export const DarkCalenderWrapper = ({
  eventDate,
}: DarkCalenderWrapperProps) => {
  return (
    <div>
      <DarkStyledCalendar
        value={eventDate}
        next2Label={null}
        prev2Label={null}
      />
    </div>
  );
};
