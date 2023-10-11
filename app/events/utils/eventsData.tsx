import { v4 as uuidv4 } from "uuid";

export interface ClubEvent {
  title: string;
  date: Date;
  description: string;
  location: string;
  id: number;
}

export const eventsData: ClubEvent[] = [
  {
    title: "General club meeting",
    location: "SB 330",
    date: new Date("October 4, 2023"),
    description:
      "Join us for our monthly general club meeting during free hour! This is the perfect opportunity for members new and old to come together, discuss ongoing projects, share new ideas, and set the agenda for upcoming months. Whether you've been with us from the start or are just thinking about joining, we encourage you to attend. Come ready to engage, listen, and make a difference. Refreshments will be provided. See you there!",
  },
  {
    title: "General club meeting",
    location: "SB 330",
    date: new Date("November 1, 2023"),
    description:
      "Join us for our monthly general club meeting during free hour! This is the perfect opportunity for members new and old to come together, discuss ongoing projects, share new ideas, and set the agenda for upcoming months. Whether you've been with us from the start or are just thinking about joining, we encourage you to attend. Come ready to engage, listen, and make a difference. Refreshments will be provided. See you there!",
  },
  {
    title: "Astronomy Night",
    location: "On The Quad",
    date: new Date("October 2, 2023"),
    description:
      "Join us for a mesmerizing night of stargazing right on campus! Experience the wonders of the cosmos through our high-tech telescopes, offering unparalleled views of celestial giants like Saturn, Jupiter, and the luminous Moon. Whether you're a seasoned astronomer or just curious about the night sky, this event promises a journey through the stars you won't forget. Don't miss this chance to gaze deeper into the universe!",
  },
].map((event, index) => ({ ...event, id: index }));
