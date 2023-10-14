"use client";
import { Box, Grid, Typography, Hidden, Divider } from "@mui/material";
import { ImageCarousel } from "./components/ImageCarousel";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { eventFillerPhotos } from "./events/utils/imageData";
import { FadeOnScroll } from "./components/FadeOnScroll";
import { ParallaxCursorComponent } from "./components/ParallaxCursorComponent";

export default function Home() {
  const isMobile = useMediaQuery("(max-width:600px)");

  const imageWidth = isMobile ? 800 : 1200;
  const imageHeight = isMobile ? 600 : 800;
  const imageMargin = isMobile ? "5rem" : "15rem";

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Grid
        container
        spacing={4}
        sx={{
          paddingLeft: {
            md: "4rem",
            sm: "0rem",
          },
          alignItems: "center",
          justifyContent: "center",
          marginTop: {
            md: "1rem",
            sm: "0rem",
          },
          marginBottom: imageMargin,
        }}
      >
        <Grid item xs={3}>
          <Hidden mdDown>
            <FadeOnScroll>
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                  paddingLeft: "1rem",
                  textAlign: "center",
                }}
              >
                Welcome to
              </Typography>
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  paddingLeft: "1rem",
                }}
              >
                Physics.
              </Typography>
            </FadeOnScroll>
            <FadeOnScroll duration={2} delay={0.5}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ textAlign: "center", margin: "1rem" }}
              >
                Welcome to the Queens College Physics Club, the hub for future
                physicists and enthusiasts alike.
              </Typography>
            </FadeOnScroll>
            <FadeOnScroll duration={2} delay={0.7}>
              <Typography
                variant="h6"
                sx={{ textAlign: "center", margin: "1rem" }}
              >
                Through interactive events, collaborative projects, and engaging
                discussions, we aim to deepen our understanding of the
                universe&apos;s mysteries.
              </Typography>
            </FadeOnScroll>
            <FadeOnScroll duration={2} delay={0.9}>
              <Typography
                variant="h6"
                sx={{ textAlign: "center", margin: "1rem" }}
              >
                Join us on this exciting journey of exploration and innovation
                at Queens College!
              </Typography>
            </FadeOnScroll>
          </Hidden>
        </Grid>
        <Grid item xs={12} md={9}>
          <FadeOnScroll>
            <Image
              src="/images/qcpc-logo.png"
              alt="qcpc logo"
              width={imageWidth}
              height={imageHeight}
            />
          </FadeOnScroll>
        </Grid>
      </Grid>
      <Hidden mdDown>
        <ParallaxCursorComponent />
      </Hidden>
      <FadeOnScroll>
        <Grid
          container
          direction="column"
          sx={{
            alignContent: "center",
            marginBottom: {
              md: "4rem",
              xs: "0rem",
            },
          }}
        >
          <Box>
            <ImageCarousel images={eventFillerPhotos} width={"90vw"} />
          </Box>
        </Grid>
      </FadeOnScroll>
      <Hidden mdUp>
        <Box
          sx={{
            backgroundColor: "#051650",
            margin: "1rem",
            padding: "1rem",
            marginBottom: "4rem",
            borderRadius: "1rem",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            Welcome to
          </Typography>
          <FadeOnScroll>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ textAlign: "center", fontWeight: "bold" }}
            >
              Physics.
            </Typography>
          </FadeOnScroll>
          <FadeOnScroll duration={2} delay={0.5}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ textAlign: "center", margin: "1rem" }}
            >
              Welcome to the Queens College Physics Club, the hub for future
              physicists and enthusiasts alike.
            </Typography>
          </FadeOnScroll>
          <FadeOnScroll duration={2} delay={0.7}>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", margin: "1rem" }}
            >
              Through interactive events, collaborative projects, and engaging
              discussions, we aim to deepen our understanding of the
              universe&apos;s mysteries.
            </Typography>
          </FadeOnScroll>
          <FadeOnScroll duration={2} delay={0.7}>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", margin: "1rem" }}
            >
              Join us on this exciting journey of exploration and innovation at
              Queens College!
            </Typography>
          </FadeOnScroll>
          <Divider sx={{ borderColor: "#fff" }} />
          <Typography
            variant="body1"
            sx={{ textAlign: "center", margin: "1rem", fontWeight: "bold" }}
          >
            Checkout the events page for upcoming and past events, along with
            photos and information!
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", margin: "1rem", fontWeight: "bold" }}
          >
            Visit the about us page for information about club members and the
            development team, aswell as the location of the club on campus and
            contact information!
          </Typography>
        </Box>
      </Hidden>
      <Hidden mdDown>
        <Box sx={{ margin: "5rem" }}>
          <Grid container direction={"row"} alignItems="center">
            <Grid item xs={5}>
              <FadeOnScroll>
                <Typography
                  variant="h5"
                  sx={{ textAlign: "center", margin: "1rem" }}
                >
                  Checkout the events page for upcoming and past events, along
                  with photos and information!
                </Typography>
              </FadeOnScroll>
            </Grid>
            <Grid item xs={1}>
              <Divider orientation="vertical" flexItem>
                OR
              </Divider>
            </Grid>
            <Grid item xs={5}>
              <FadeOnScroll delay={0.5}>
                <Typography
                  variant="h5"
                  sx={{ textAlign: "center", margin: "1rem" }}
                >
                  Visit the about us page for information about club members and
                  the development team, as well as the location of the club on
                  campus and contact information!
                </Typography>
              </FadeOnScroll>
            </Grid>
          </Grid>
        </Box>
      </Hidden>
    </main>
  );
}
