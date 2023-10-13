import { eventFillerPhotos, firstAstronomyNightPhotos } from "./imageData";
import { PhotosArray } from "./imageData";
export interface ClubEvent {
  title: string;
  date: Date;
  description: string;
  location: string;
  id: number;
  eventPhotos: PhotosArray;
}

export const eventsData: ClubEvent[] = [
  {
    title: "General club meeting",
    location: "SB 330",
    date: new Date("October 4, 2023"),
    description:
      "Join us for our monthly general club meeting during free hour! This is the perfect opportunity for members new and old to come together, discuss ongoing projects, share new ideas, and set the agenda for upcoming months. Whether you've been with us from the start or are just thinking about joining, we encourage you to attend. Come ready to engage, listen, and make a difference. Refreshments will be provided. See you there!",
    eventPhotos: eventFillerPhotos,
  },
  {
    title: "General club meeting",
    location: "SB 330",
    date: new Date("November 1, 2023"),
    description:
      "Join us for our monthly general club meeting during free hour! This is the perfect opportunity for members new and old to come together, discuss ongoing projects, share new ideas, and set the agenda for upcoming months. Whether you've been with us from the start or are just thinking about joining, we encourage you to attend. Come ready to engage, listen, and make a difference. Refreshments will be provided. See you there!",
    eventPhotos: eventFillerPhotos,
  },
  {
    title: "Astronomy Night",
    location: "On The Quad",
    date: new Date("October 2, 2023"),
    description:
      "Join us for a mesmerizing night of stargazing right on campus! Experience the wonders of the cosmos through our high-tech telescopes, offering unparalleled views of celestial giants like Saturn, Jupiter, and the luminous Moon. Whether you're a seasoned astronomer or just curious about the night sky, this event promises a journey through the stars you won't forget. Don't miss this chance to gaze deeper into the universe!",
    eventPhotos: firstAstronomyNightPhotos,
  },
  {
    title: "Lab tour with Professor Almeida",
    location: "SB 335 12PM - 1:40PM",
    date: new Date("October 16, 2023"),
    description:
      "Join us for an enlightening lab tour led by Professor Almeida! Dive deep into the world of physics, witness cutting-edge experiments in action, and engage in insightful discussions. Perfect for enthusiasts and curious minds. Don't miss this exclusive opportunity to see science in motion!",
    eventPhotos: eventFillerPhotos,
  },
  {
    title: "Astronomy Observing Night",
    location: "On The Quad by the fountain 6-8PM",
    date: new Date("October 19, 2023"),
    description:
      "Join the Physics Club for an enchanting 'Astronomy Observing Night'! Delve into the mysteries of the cosmos as we peer through telescopes, spotting distant stars, galaxies, and celestial phenomena. Whether you're an avid stargazer or a curious beginner, this event promises a night of wonder and discovery. Don't miss out on this stellar experience!",
    eventPhotos: firstAstronomyNightPhotos,
  },
  {
    title: "Pre-engineering meeting with Columbia representative",
    location: "SB 326 12PM - 1:40PM",
    date: new Date("October 25, 2023"),
    description:
      "Join the Physics Club for a special session with a representative from Columbia University. Dive deep into pre-engineering insights, explore academic opportunities, and network with industry professionals. Don't miss this chance to learn and engage with fellow students and experts in the field!",
    eventPhotos: eventFillerPhotos,
  },
].map((event, index) => ({ ...event, id: index }));
