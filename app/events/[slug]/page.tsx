"use client";
import { Box, Container, Typography } from "@mui/material";
import { eventsData } from "../utils";
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { styled } from "@mui/material/styles";

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

export default function productPage({ params }: { params: { slug: string } }) {
  const event = eventsData[Number(params.slug)];

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginTop="2rem"
        marginBottom="2rem"
      >
        <Typography variant="h2" align="center" gutterBottom>
          {event.title}
        </Typography>
        <Typography variant="h6" align="center">
          {event.description}
        </Typography>
        <DarkStyledCalendar
          navigationLabel={() => null}
          value={event.date}
          next2Label={null}
          prev2Label={null}
        />
      </Box>
    </Container>
  );
}
