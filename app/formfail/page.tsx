"use client";
import React from "react";
import { Container, Typography } from "@mui/material";

const successPage = () => {
  return (
    <Container maxWidth="md" sx={{ height: "100vh" }}>
      <Typography variant="h3" sx={{ mt: 2, mb: 2, textAlign: "left" }}>
        There seems to be an error with your form submission.
      </Typography>
      <Typography variant="h6" sx={{ mt: 2, mb: 2, textAlign: "left" }}>
        Our forms may be closed at the moment, or you may have entered a value
        incorrectly. Please try again now or at a later date.
      </Typography>
    </Container>
  );
};

export default successPage;
