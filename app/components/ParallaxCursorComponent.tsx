"use client";
import { Container, Typography } from "@mui/material";
import Link from "next/link";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
  useParallaxOffset,
} from "react-parallax-mouse";
import InstagramIcon from "@mui/icons-material/Instagram";
import { BsDiscord, BsGithub } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { AiFillInfoCircle } from "react-icons/ai";

export const ParallaxCursorComponent = () => {
  return (
    <>
      <div
        style={{
          height: "15rem",
          width: "100%",
          color: "#fff",
          overflow: "hidden",
          marginBottom: "8rem",
        }}
      >
        <div
          style={{
            height: "15rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <MouseParallaxContainer
            className="parallax"
            containerStyle={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "auto auto auto auto auto",
            }}
            globalFactorX={0.3}
            globalFactorY={0.3}
            resetOnLeave
          >
            <MouseParallaxChild
              factorX={0.6}
              factorY={0.1}
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80)",
                backgroundPositionY: "50%",
                transform: "scale(1.2)",
                position: "absolute",
                filter: "blur(1.5px) brightness(100%) opacity(0.4)",
                backgroundSize: "auto",
                backgroundRepeat: "repeat",
                width: "100%",
                height: "15rem",
                backfaceVisibility: "hidden",
              }}
            />
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.5}
              style={{
                filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "15rem",
              }}
            >
              <Link href={"https://www.spsnational.org/"}>
                <Container
                  sx={{
                    fontSize: "4rem",
                    color: "#000",
                    transition: "0.2s",
                    opacity: "0.8",
                    "&:hover": {
                      transform: "scale(1.05)",
                      color: "#000",
                      opacity: "1",
                    },
                  }}
                >
                  <Typography style={{ fontSize: "3rem", color: "#000" }}>
                    SPS
                  </Typography>
                </Container>
              </Link>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.7}
              factorY={0.5}
              style={{
                filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%",
              }}
            >
              <Link href={"https://physics.qc.cuny.edu/"}>
                <Container
                  sx={{
                    fontSize: "4rem",
                    color: "#000",
                    transition: "0.2s",
                    opacity: "0.8",
                    "&:hover": {
                      transform: "scale(1.05)",
                      color: "#000",
                      opacity: "1",
                    },
                  }}
                >
                  <IoMdSchool style={{ fontSize: "4rem", color: "#000" }} />
                </Container>
              </Link>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.9}
              factorY={0.5}
              style={{
                filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%",
              }}
            >
              <Link
                href={"https://github.com/AdamJablonka/qc-physics-club-website"}
              >
                <Container
                  sx={{
                    fontSize: "4rem",
                    color: "#000",
                    transition: "0.2s",
                    opacity: "0.8",
                    "&:hover": {
                      transform: "scale(1.05)",
                      color: "#000",
                      opacity: "1",
                    },
                  }}
                >
                  <BsGithub style={{ fontSize: "4rem", color: "#000" }} />
                </Container>
              </Link>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.7}
              factorY={0.5}
              style={{
                filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%",
              }}
            >
              <Link href={"https://www.instagram.com/qc_societyofphysics/"}>
                <InstagramIcon
                  sx={{
                    fontSize: "4rem",
                    color: "#000",
                    transition: "0.2s",
                    opacity: "0.8",
                    "&:hover": {
                      transform: "scale(1.05)",
                      color: "#000",
                      opacity: "1",
                    },
                  }}
                />
              </Link>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.5}
              style={{
                filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%",
                color: "#000",
                fontSize: "4rem",
              }}
            >
              <Link href={"https://discord.gg/eGRPr9w6gU"}>
                <Container
                  sx={{
                    fontSize: "4rem",
                    color: "#000",
                    transition: "0.2s",
                    opacity: "0.8",
                    "&:hover": {
                      transform: "scale(1.05)",
                      color: "#000",
                      opacity: "1",
                    },
                  }}
                >
                  <BsDiscord />
                </Container>
              </Link>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
      </div>
    </>
  );
};
