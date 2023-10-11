import { Box, Grid, Typography } from "@mui/material";
import { ImageCarousel } from "./components/ImageCarousel";

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Grid container direction="column" sx={{ alignContent: "center" }}>
        <Grid item>
          <Typography variant="h3">Hello!</Typography>
        </Grid>
        <Grid item>
          <Typography>Welcome to the physics club.</Typography>
        </Grid>
        <Box>
          <ImageCarousel images={imageData} width={'90vw'}/>
        </Box>
      </Grid>
    </main>
  );
}
