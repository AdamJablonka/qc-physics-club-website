"use client";
import React from "react";
import { Container, Typography } from "@mui/material";

const successPage = () => {
  return (
    <Container maxWidth="md" sx={{ height: "100vh" }}>
      <Typography variant="h3" sx={{ mt: 2, mb: 2, textAlign: "left" }}>
        Thank you for submitting an interest form!
      </Typography>
      <Typography variant="h6" sx={{ mt: 2, mb: 2, textAlign: "left" }}>
        We have recieved your information. If you entered an email, you may
        recieve an email from someone on our executive team to answer any
        questions you may have. Thank you!
      </Typography>
    </Container>
  );
};

export default successPage;
