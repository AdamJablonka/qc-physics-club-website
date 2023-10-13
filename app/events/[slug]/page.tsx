import type { Metadata } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";
import { eventsData } from "../utils";
import React from "react";
import "react-calendar/dist/Calendar.css";
import { DarkCalenderWrapper } from "./DarkCalenderWrapper";
import Image from "next/image";
import EventImageList from "../../components/EventImageList";
import { FadeOnScroll } from "@/app/components/FadeOnScroll";

export const metadata: Metadata = {
  title: "Club Event",
  description: "Below is a club event.",
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  let event = eventsData[Number(params.slug)];
  const eventDate = event.date;
  const eventPhotos = event.eventPhotos;

  return (
    <div>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: {
            xs: "30rem",
            md: "24rem",
          },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/images/1d50e6c9cf491d88c7c47c5db53c89f5.png"
          alt="My Image"
          layout="fill"
          objectFit="cover"
          style={{ position: "absolute", zIndex: -1, opacity: 0.3 }}
        />

        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            zIndex: 2,
            top: "2rem",
          }}
          gap={4}
        >
          <Grid item>
            <FadeOnScroll>
              <Typography color="textSecondary">
                Event date: {eventDate.toDateString()}
              </Typography>
            </FadeOnScroll>
            <FadeOnScroll>
              <Typography color="textSecondary">
                Location: {event.location}
              </Typography>
            </FadeOnScroll>
          </Grid>
          <FadeOnScroll>
            <Grid item>
              <DarkCalenderWrapper eventDate={eventDate} />
            </Grid>
          </FadeOnScroll>
        </Grid>
      </Box>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          marginTop="2rem"
          marginBottom="2rem"
        >
          <FadeOnScroll>
            <Typography variant="h2" align="center" gutterBottom>
              {event.title}
            </Typography>
          </FadeOnScroll>
          <FadeOnScroll>
            <Typography variant="h6" align="center">
              {event.description}
            </Typography>
          </FadeOnScroll>
          <EventImageList eventPhotos={eventPhotos} />
        </Box>
      </Container>
    </div>
  );
}
