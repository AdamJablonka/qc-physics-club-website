"use client";

import { Box, Grid, Typography } from "@mui/material";
import { ImageCarousel } from "./components/ImageCarousel";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { eventFillerPhotos } from "./events/utils/imageData";

export default function Home() {
  const isMobile = useMediaQuery("(max-width:600px)");

  const imageWidth = isMobile ? 800 : 1100;
  const imageHeight = isMobile ? 600 : 700;
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
          <ImageCarousel images={eventFillerPhotos} width={"90vw"} />
        </Box>
      </Grid>
    </main>
  );
}
