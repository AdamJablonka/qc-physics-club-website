// pages/events.js
"use client";
import type { Metadata } from "next";
import { ImageCarousel } from "../components/ImageCarousel";
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  IconButtonProps,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import React from "react";
import { ExpandableCard } from "../components/ExpandableCard";
import { eventsData, eventFillerPhotos, ClubEvent } from "./utils";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

eventsData.sort((a, b) => a.date.getTime() - b.date.getTime());

const currentDate = new Date();
const upcomingEvents = eventsData.filter((event) => event.date > currentDate);
upcomingEvents.sort((a, b) => a.date.getTime() - b.date.getTime());

function createSlug(id: string): string {
  return id;
}

// export const metadata: Metadata = {
//   title: "Club Events",
//   description: "Here are some of our upcoming club events.",
// };

export default function Events() {
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
          SPS Events
        </Typography>
        <Typography variant="h6" align="center">
          All curious minds are welcome to attend our events!
        </Typography>
      </Box>
      <Box margin={6}>
        <ImageCarousel images={eventFillerPhotos} width={"70vw"} />
        <Typography variant="h4" gutterBottom>
          Upcoming Events
        </Typography>
        <Grid container spacing={3} marginBottom="20px">
          {upcomingEvents.map((event: ClubEvent, index: number) => (
            <Grid
              item
              xs={12}
              md={6}
              key={event.id}
              onClick={() =>
                (window.location.href = `/events/${createSlug(
                  event.id.toString()
                )}`)
              }
            >
              <ExpandableCard
                date={event.date}
                title={event.title}
                location={event.location}
                description={event.description}
              />
            </Grid>
          ))}
        </Grid>
        <Typography variant="h4" gutterBottom>
          All Events
        </Typography>
        <Grid container spacing={3}>
          {eventsData.map((event: ClubEvent, index: number) => (
            <Grid
              item
              xs={12}
              md={6}
              key={event.id}
              onClick={() =>
                (window.location.href = `/events/${createSlug(
                  event.id.toString()
                )}`)
              }
            >
              <ExpandableCard
                date={event.date}
                title={event.title}
                location={event.location}
                description={event.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
