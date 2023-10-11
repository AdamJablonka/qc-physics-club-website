import type { Metadata } from "next";
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet our team.",
};


export default function About() {
  return (
    <Container className="flex flex-col items-center pt-10 min-h-screen w-full px-4">
      <Typography variant = "h1" className="text-4xl font-bold mb-6">About Us</Typography>
      <Container className="text-center max-w-xl mb-8">
        {/* Rest of your content */}
        Our Physics Club is a group of 
        undergrad students who love learning 
        about how the world works. We chat about physics, 
        help each other out, and have fun exploring new ideas together.
      </Container>
      <Image src="/images/defaultgirl.jpg"
             alt="Club President" 
             className="rounded shadow-lg mb-4 "
             width={300}
             height={300}
             />
      <Container className="text-center mb-8">
        <Typography variant = "body1" className="text-xl font-semibold">Taylor</Typography>
        <Typography variant = "body1" className="text-md">President</Typography>
      </Container>

      <Container className="flex justify-around w-full max-w-4xl mb-8">
        <Container className="text-center">
          <Image src="/images/physics.jpg"
                alt="Club Vice President" 
                className="rounded shadow-lg mb-4"
                width={300}
                height={300}
                />
          <Typography variant = "body1" className="text-xl font-semibold">Swan Htet</Typography>
          <Typography variant = "body1" className="text-md">Vice President</Typography>
        </Container>
        <Container className="text-center">
          <Image src="/images/luigi.png"
                alt="Club Secretary" 
                className="rounded shadow-lg mb-4"
                width={300}
                height={300}
                 />
          <Typography variant = "body1" className="text-xl font-semibold">Anand Persaud</Typography>
          <Typography variant = "body1" className="text-md">Secretary</Typography>
        </Container>
        <Container className="text-center">
          <Image src="/images/nami.jpeg" 
                alt="Club Treasurer" 
                className="rounded shadow-lg mb-4"
                width={300}
                height={300}
                />
          <Typography variant = "body1" className="text-xl font-semibold">Ryan Idk his last name</Typography>
          <Typography variant = "body1" className="text-md">Treasurer</Typography>
        </Container>
      </Container>

      <Container className="mt-8">
    <Typography variant="h2" className="text-3xl font-bold mb-6 text-center">Our Developers</Typography>
    <Grid container spacing={4}>
        <Grid item xs={6}> 
          <Container className="text-center flex justify-center items-center flex-col">
            <Link href="https://www.linkedin.com/in/carlos-vega-13705b195/" target="_blank" passHref>
              <Image src="/images/carlos.jpeg" alt="Carlos Vega" width={200} height={200} className="rounded shadow-lg mb-4"/>
            </Link>
            <Typography variant="body1" className="text-xl font-semibold text-center">Carlos Vega</Typography>
            <Typography variant = "body1" className="text-md">Lead Developer</Typography>
          </Container>
        </Grid>
        <Grid item xs={6}> 
          <Container className="text-center flex justify-center items-center flex-col">
            <Link href="https://www.linkedin.com/in/adam-jablonka/" target="_blank" passHref>
              <Image src="/images/adam.png" alt="Adam Jablonka" width={200} height={200} className="rounded shadow-lg mb-4"/>
            </Link>
            <Typography variant="body1" className="text-xl font-semibold text-center">Adam Jablonka</Typography>
            <Typography variant = "body1" className="text-md">Lead Developer</Typography>
          </Container>
        </Grid>
        <Grid item xs={6}>
          <Container className="text-center flex justify-center items-center flex-col">
            <Link href="https://www.linkedin.com/in/jeremy-gangaram-89671222a/" target="_blank" passHref>
              <Image src="/images/jeremy.png" alt="Jeremy Gangaram" width={200} height={200} className="rounded shadow-lg mb-4"/>
            </Link>
            <Typography variant="body1" className="text-xl font-semibold text-center">Jeremy Gangaram</Typography>
            <Typography variant = "body1" className="text-md">Lead Developer</Typography>
          </Container>
        </Grid>
        <Grid item xs={6}>
          <Container className="text-center flex justify-center items-center flex-col">
            <Link href="https://www.linkedin.com/in/masroor-k/" target="_blank" passHref>
              <Image src="/images/masroor.png" alt="Jeremy Gangaram" width={200} height={200} className="rounded shadow-lg mb-4"/>
            </Link>
            <Typography variant="body1" className="text-xl font-semibold text-center">Masroor</Typography>
            <Typography variant = "body1" className="text-md">Amoung Us</Typography>
          </Container>
        </Grid>
    </Grid>
</Container>
    </Container>
  )
}