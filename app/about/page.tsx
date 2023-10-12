"use client";
import type { Metadata } from "next";
import { Container, Typography, Card, CardContent, Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "About Us",
//   description: "Meet our team.",
// };


export default function About() {
  const [isPresident, setPresidentVisible] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isTreasure, setTreasureVisible] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isVice, setVicePreVisible] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSecretary, setSecretaryVisible] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isCarlos, setCarlosVisible] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isAdam, setAdamVisible] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isJeremy, setJeremyVisible] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isMasroor, setMasroorVisible] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container className="flex flex-col items-center pt-10 min-h-screen w-full px-4 mb-20">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        About Us
      </Typography>
      <Container className="text-center max-w-xl mb-8">
        {/* Rest of your content */}
        Our Physics Club is a group of undergrad students who love learning
        about how the world works. We chat about physics, help each other out,
        and have fun exploring new ideas together.
      </Container>

      <Container className="flex flex-col items-center justify-center animate-slideInFromLeft">
        <Container
          ref={isPresident}
          className={`flex flex-col items-center justify-center transition-opacity duration-1000 ${
            setPresidentVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src="/images/defaultgirl.jpg"
            alt="Club President"
            className="rounded shadow-lg mb-4 "
            width={200}
            height={200}
          />
          <Container className="text-center mb-8">
            <Typography variant="body1" className="text-md font-semibold">
              Taylor
            </Typography>
            <Typography variant="body1" className="text-sm">
              President
            </Typography>
          </Container>
        </Container>
      </Container>

      <Container className="flex justify-around w-full max-w-4xl mb-8">
        <Container
          ref={isVice}
          className={`flex flex-col items-center justify-center transition-opacity duration-1000 ${
            setPresidentVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src="/images/physics.jpg"
            alt="Club Vice President"
            className="rounded shadow-lg mb-4 "
            width={200}
            height={200}
          />
          <Container className="text-center mb-8">
            <Typography variant="body1" className="text-mb font-semibold">
              Swan Htet
            </Typography>
            <Typography variant="body1" className="text-sm">
              Vice President
            </Typography>
          </Container>
        </Container>
        <Container className="text-center">
          <Container
            ref={isSecretary}
            className={`flex flex-col items-center justify-center transition-opacity duration-1000 ${
              setSecretaryVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src="/images/luigi.png"
              alt="Club Secretary"
              className="rounded shadow-lg mb-4 "
              width={200}
              height={200}
            />
            <Container className="text-center mb-8">
              <Typography variant="body1" className="text-mb font-semibold">
                Anan Persaud
              </Typography>
              <Typography variant="body1" className="text-sm">
                Secretary
              </Typography>
            </Container>
          </Container>
        </Container>
        <Container className="text-center">
          <Container
            ref={isTreasure}
            className={`flex flex-col items-center justify-center transition-opacity duration-1000 ${
              setSecretaryVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src="/images/nami.jpeg"
              alt="Club Treasure"
              className="rounded shadow-lg mb-4 "
              width={200}
              height={200}
            />
            <Container className="text-center mb-8">
              <Typography variant="body1" className="text-mb font-semibold">
                Ryan
              </Typography>
              <Typography variant="body1" className="text-sm">
                Treasure
              </Typography>
            </Container>
          </Container>
        </Container>
      </Container>

      <Container className="mt-8">
        <Typography
          variant="h2"
          className="text-3xl font-bold mb-6 text-center"
        >
          Our Developers
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Container
              ref={isCarlos}
              className={`flex flex-col items-center justify-center transition-opacity duration-1000 ${
                setCarlosVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link
                href="https://www.linkedin.com/in/carlos-vega-lemus/"
                target="_blank"
                passHref
              >
                <Image
                  src="/images/carlos.jpeg"
                  alt="Carlos Vega"
                  width={200}
                  height={200}
                  className="rounded shadow-lg mb-4"
                />
              </Link>
              <Typography
                variant="body1"
                className="text-mb font-semibold text-center"
              >
                Carlos Vega
              </Typography>
              <Typography variant="body1" className="text-sm">
                Lead Developer
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={6}>
            <Container
              ref={isAdam}
              className={`flex flex-col items-center justify-center transition-opacity duration-1000 ${
                setAdamVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link
                href="https://www.linkedin.com/in/adam-jablonka/"
                target="_blank"
                passHref
              >
                <Image
                  src="/images/adam.png"
                  alt="Adam Jablonka"
                  width={200}
                  height={200}
                  className="rounded shadow-lg mb-4"
                />
              </Link>
              <Typography
                variant="body1"
                className="text-mb font-semibold text-center"
              >
                Adam Jablonka
              </Typography>
              <Typography variant="body1" className="text-sm">
                Lead Developer
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={6}>
            <Container className="text-center flex justify-center items-center flex-col">
              <Container
                ref={isJeremy}
                className={`flex flex-col items-center justify-center transition-opacity duration-1000 ${
                  setJeremyVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <Link
                  href="https://www.linkedin.com/in/jeremy-gangaram-89671222a/"
                  target="_blank"
                  passHref
                >
                  <Image
                    src="/images/jeremy.png"
                    alt="Jeremy Gangaram"
                    width={200}
                    height={200}
                    className="rounded shadow-lg mb-4"
                  />
                </Link>
                <Typography
                  variant="body1"
                  className="text-sm font-semibold text-center"
                >
                  Jeremy Gangaram
                </Typography>
                <Typography variant="body1" className="text-sm">
                  Lead Developer
                </Typography>
              </Container>
            </Container>
          </Grid>
          <Grid item xs={6}>
            <Container className="text-center flex justify-center items-center flex-col">
              <Container
                ref={isMasroor}
                className={`flex flex-col items-center justify-center transition-opacity duration-1000 ${
                  setMasroorVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <Link
                  href="https://www.linkedin.com/in/masroor-k/"
                  target="_blank"
                  passHref
                >
                  <Image
                    src="/images/masroor.png"
                    alt="Masroor"
                    width={200}
                    height={200}
                    className="rounded shadow-lg mb-4"
                  />
                </Link>
                <Typography
                  variant="body1"
                  className="text-mb font-semibold text-center"
                >
                  Masroor
                </Typography>
                <Typography variant="body1" className="text-sm">
                  Amoung Us
                </Typography>
              </Container>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
