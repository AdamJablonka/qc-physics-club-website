// pages/events.js

import { ImageCarousel } from "../components/ImageCarousel";
import Link from 'next/link';
import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';

type Event = {
  title: string;
  date: Date;
  description: string;
  location: string;
};

export const eventsData: Event[] = [
  {
    title: 'Event 1',
    location: 'SB 330',
    date: new Date('September 20, 2023'),
    description: 'Description for event 1.',

  },
  {
    title: 'Event 2',
    location: 'SB 330',
    date: new Date('October 4, 2023'),
    description: 'Description for event 2.',
  },
  {
    title: 'Event 3',
    location: 'SB 330',
    date: new Date('November 4, 2023'),
    description: 'Description for event 3.',
  },
  {
    title: 'Event 4',
    location: 'SB 330',
    date: new Date('September 19, 2023'),
    description: 'Description for event 4.',
  },
  {
    title: 'Astronomy Night',
    location: 'On The Quad',
    date: new Date('October 2, 2023'),
    description: "Join us for a mesmerizing night of stargazing right on campus! Experience the wonders of the cosmos through our high-tech telescopes, offering unparalleled views of celestial giants like Saturn, Jupiter, and the luminous Moon. Whether you're a seasoned astronomer or just curious about the night sky, this event promises a journey through the stars you won't forget. Don't miss this chance to gaze deeper into the universe!"
  }
];

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

eventsData.sort((a, b) => a.date.getTime() - b.date.getTime());

const currentDate = new Date();
const upcomingEvents = eventsData.filter(event => event.date > currentDate);
upcomingEvents.sort((a, b) => a.date.getTime() - b.date.getTime());

function createSlug(title: string): string {
  console.log(title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''))
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function Events() {
  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginTop="2rem" marginBottom="2rem">
        <Typography variant="h2" align="center" gutterBottom>
          SPS Events
        </Typography>
        <Typography variant="h6" align="center">
          All curious minds are welcome to attend our events!
        </Typography>
      </Box>
      <Box margin={6}>
        <ImageCarousel images={imageData} width={'72vw'}/>
        <Typography variant="h4" gutterBottom>
          Upcoming Events
        </Typography>
        <Grid container spacing={3} marginBottom="20px">
          {upcomingEvents.map((event: Event, index: number) => (
            <Grid item xs={12} md={6} key={index}>
              <Link href={`/events/${createSlug(event.title)}`} passHref>
              <Card>
                  <CardContent sx={{height:"10rem"}}>
                    <Typography variant="h6">{event.title}</Typography>
                    <Typography color="textSecondary">{event.location}</Typography>
                    <Typography color="textSecondary">{event.date.toDateString()}</Typography>
                    <Typography paragraph className="clampDescription" sx={{
                      display: '-webkit-box',
                      webkitLineClamp: 2,
                      webkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipse'
                      }}
                    >
                      {event.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h4" gutterBottom>
          All Events
        </Typography>
        <Grid container spacing={3}>
          {eventsData.map((event: Event, index: number) => (
            <Grid item xs={12} md={6} key={index}>
              <Link href={`/events/${createSlug(event.title)}`} passHref>
              <Card>
                <CardContent sx={{height:"10rem", overflow:"auto"}}>
                  <Typography variant="h6">{event.title}</Typography>
                  <Typography color="textSecondary">{event.location}</Typography>
                  <Typography color="textSecondary">{event.date.toDateString()}</Typography>
                  <Typography paragraph sx={{
                    display: '-webkit-box',
                    webkitLineClamp: 2,
                    webkitBoxOrient: 'vertical',
                    }}
                  >
                    {event.description}
                  </Typography>
                </CardContent>
              </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}