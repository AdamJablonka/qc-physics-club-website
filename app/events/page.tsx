// pages/events.js

import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

type Event = {
  title: string;
  date: Date;
  description: string;
  location: string;
};

const eventsData: Event[] = [
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
    description: 'Description for event 3.',
  }

  // ... add more events as needed
];

eventsData.sort((a, b) => a.date.getTime() - b.date.getTime());

export default function Events() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Upcoming Events
      </Typography>
      <Grid container spacing={3}>
        {eventsData.map((event: Event, index: number) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{event.title}</Typography>
                <Typography color="textSecondary">{event.location}</Typography>
                <Typography color="textSecondary">{event.date.toDateString()}</Typography>
                <Typography paragraph>{event.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h4" gutterBottom>
        Past Events
      </Typography>
    </Container>
  );
}
