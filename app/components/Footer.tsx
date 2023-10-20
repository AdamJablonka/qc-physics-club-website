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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="body2">
              Email: contact@example.com
              <br />
              Phone: (123) 456-7890
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Links & Info</Typography>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Etc information</Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
