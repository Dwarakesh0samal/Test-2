import keralaImg from "@/assets/kerala.jpg";
import andamanImg from "@/assets/andaman.jpg";
import ladakhImg from "@/assets/ladakh.jpg";
import goaImg from "@/assets/goa.jpg";

export interface Destination {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  rating: number;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    id: "kerala",
    title: "Kerala Backwaters",
    subtitle: "God's Own Country",
    description: "Cruise through serene backwaters on traditional houseboats, explore lush tea plantations, and experience authentic Ayurvedic wellness in this tropical paradise.",
    image: keralaImg,
    price: 25999,
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    highlights: ["Houseboat Stay", "Tea Plantations", "Ayurvedic Spa", "Kathakali Show"],
  },
  {
    id: "andaman",
    title: "Andaman Islands",
    subtitle: "Tropical Paradise",
    description: "Discover pristine beaches with crystal-clear waters, dive into vibrant coral reefs, and explore the untouched beauty of these enchanting islands.",
    image: andamanImg,
    price: 35999,
    duration: "6 Days / 5 Nights",
    rating: 4.8,
    highlights: ["Scuba Diving", "Beach Camping", "Water Sports", "Island Hopping"],
  },
  {
    id: "ladakh",
    title: "Ladakh Adventure",
    subtitle: "Land of High Passes",
    description: "Embark on an epic journey through dramatic mountain landscapes, ancient monasteries, and the world's highest motorable roads.",
    image: ladakhImg,
    price: 32999,
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    highlights: ["Pangong Lake", "Nubra Valley", "Monastery Visits", "Mountain Biking"],
  },
  {
    id: "goa",
    title: "Goa Beaches",
    subtitle: "Sun, Sand & Surf",
    description: "Relax on golden beaches, explore Portuguese heritage, enjoy vibrant nightlife, and savor delicious seafood in India's favorite beach destination.",
    image: goaImg,
    price: 18999,
    duration: "4 Days / 3 Nights",
    rating: 4.7,
    highlights: ["Beach Hopping", "Water Sports", "Nightlife", "Heritage Tours"],
  },
];
