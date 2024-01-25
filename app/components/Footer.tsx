// src/components/Footer.tsx
"use client";
import React from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: theme.palette.info.dark,
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">About Us</Typography>
            <Typography variant="body2">
              Queens College Physics Club - Officialy apart of Sigma Pi Sigma
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="body2">
              Email: physicsclub.qc.cuny@gmail.com
              <br />
              Phone: (718) 997-3350
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Links & Info</Typography>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="https://www.qc.cuny.edu/academics/physics/">
                  Department
                </a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Etc information</Typography>
            <Typography variant="body2">
              Open to all students, not only physics! Feel free to drop by
              whenever. Room: Science building B330
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
