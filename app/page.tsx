"use client";

import { Box, Grid, Typography } from "@mui/material";
import { ImageCarousel } from "./components/ImageCarousel";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Home() {
  const imageData = [
    {
      src: "/images/IMG_3167.jpg",
      alt: "image1",
      legend: "Image 1",
      width: 1280,
      height: 720,
    },
    {
      src: "/images/IMG_3167.jpg",
      alt: "image2",
      legend: "Image 2",
      width: 1280,
      height: 720,
    },
    {
      src: "/images/IMG_3167.jpg",
      alt: "image2",
      legend: "Image 3",
      width: 1280,
      height: 720,
    },
  ];
  const isMobile = useMediaQuery("(max-width:600px)"); // Define your mobile breakpoint

  // Define different width and height values for mobile and web
  const imageWidth = isMobile ? 800 : 1300;
  const imageHeight = isMobile ? 600 : 900;
  const imageMargin = isMobile ? "2rem" : "6rem";

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Image
        src="/images/qcpc-logo.png"
        alt="qcpc logo"
        width={imageWidth}
        height={imageHeight}
        style={{ marginBottom: imageMargin }}
      />
      <Grid container direction="column" sx={{ alignContent: "center" }}>
        <Box>
          <ImageCarousel images={imageData} width={"90vw"} />
        </Box>
      </Grid>
    </main>
  );
}
