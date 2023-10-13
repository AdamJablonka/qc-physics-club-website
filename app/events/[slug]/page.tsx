import type { Metadata } from "next";
import {
  Box,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { eventsData } from "../utils";
import React from "react";
import "react-calendar/dist/Calendar.css";
import { DarkCalenderWrapper } from "./DarkCalenderWrapper";
import { eventFillerPhotos } from "../utils";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Club Event",
  description: "Below is a club event.",
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  let event = eventsData[Number(params.slug)];
  const eventDate = event.date;

  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "23rem",
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
            <Typography color="textSecondary">
              Event date: {eventDate.toDateString()}
            </Typography>
            <Typography color="textSecondary">
              Location: {event.location}
            </Typography>
          </Grid>
          <Grid item>
            <DarkCalenderWrapper eventDate={eventDate} />
          </Grid>
        </Grid>
      </div>
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
          <ImageList
            sx={{ width: "100%", height: "100%", margin: "5rem" }}
            variant="woven"
            cols={3}
            gap={20}
          >
            {eventFillerPhotos.map((item) => (
              <ImageListItem key={item.src}>
                <Image
                  src={`${item.src}`}
                  alt={item.alt}
                  width={400}
                  height={400}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Container>
    </div>
  );
}
