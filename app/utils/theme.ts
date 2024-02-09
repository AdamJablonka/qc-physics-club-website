"use client";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#070e2d",
      paper: "#6196fe",
    },
    text: {
      primary: "#ffe8c7", // Primary text color
    },
  },
});
