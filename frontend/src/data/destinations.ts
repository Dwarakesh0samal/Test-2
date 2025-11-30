import keralaImg from "@/assets/kerala.jpg";
import andamanImg from "@/assets/andaman.jpg";
import ladakhImg from "@/assets/ladakh.jpg";
import goaImg from "@/assets/goa.jpg";

export interface DestinationSection {
  id: string;
  title: string;
  content: string;
}

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
  sections?: DestinationSection[];
}

export const destinations: Destination[] = [
  {
    id: "kerala",
    title: "Kerala Backwaters",
    subtitle: "God's Own Country",
    description: "Cruise through serene backwaters on traditional houseboats, explore lush tea plantations, and authentic Ayurvedic wellness in this tropical paradise.",
    image: keralaImg,
    price: 25999,
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    highlights: ["Houseboat Stay", "Tea Plantations", "Ayurvedic Spa", "Kathakali Show"],
    sections: [
      { id: "overview", title: "Overview", content: "Kerala, known as God's Own Country, offers a unique blend of serene backwaters, lush hill stations, and rich cultural heritage." },
      { id: "accommodation", title: "Accommodation", content: "Choose from luxury houseboats, heritage hotels, eco-resorts nestled in tea plantations, and traditional homestays." },
    ],
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
    sections: [
      { id: "overview", title: "Overview", content: "The Andaman Islands offer pristine beaches, turquoise waters, and some of the best diving spots in Asia. Explore untouched nature, historical sites, and vibrant marine life." },
      { id: "accommodation", title: "Accommodation", content: "From beachfront resorts to eco-friendly beach huts, experience island living at its finest. Options include luxury resorts in Port Blair and rustic beach camps on Havelock." },
    ],
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
    sections: [
      { id: "overview", title: "Overview", content: "Ladakh, the land of high passes, offers breathtaking landscapes, ancient Buddhist monasteries, and adventure at every turn. Experience the raw beauty of the Himalayas." },
      { id: "accommodation", title: "Accommodation", content: "Stay in traditional Ladakhi guesthouses, luxury camps by Pangong Lake, or boutique hotels in Leh. Experience local hospitality amid stunning mountain backdrops." },
    ],
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
    sections: [
      { id: "overview", title: "Overview", content: "Goa combines Portuguese heritage with Indian culture, offering stunning beaches, vibrant nightlife, delicious cuisine, and a laid-back atmosphere that keeps visitors coming back." },
      { id: "accommodation", title: "Accommodation", content: "Choose from beach shacks to 5-star resorts, heritage Portuguese villas to boutique hotels. North Goa for parties, South Goa for tranquility." },
    ],
  },
  {
    id: "heritage-trails",
    title: "Heritage Trails",
    subtitle: "Journey Through Time",
    description: "Walk through centuries of history exploring ancient monuments, majestic forts, and UNESCO World Heritage sites across India's most storied destinations.",
    image: keralaImg,
    price: 28999,
    duration: "6 Days / 5 Nights",
    rating: 4.8,
    highlights: ["UNESCO Sites", "Ancient Temples", "Royal Palaces", "Museum Tours"],
    sections: [
      { id: "overview", title: "Overview", content: "India's heritage trails take you through millennia of history, from ancient temples to Mughal monuments, showcasing architectural marvels and cultural treasures." },
      { id: "accommodation", title: "Accommodation", content: "Stay in heritage hotels, converted palaces, and historic properties that are themselves part of India's rich heritage story." },
    ],
  },
  {
    id: "temple-trail",
    title: "Temple Trail",
    subtitle: "Spiritual Odyssey",
    description: "Embark on a sacred journey visiting ancient temples, experiencing traditional rituals, and discovering the spiritual heart of India.",
    image: keralaImg,
    price: 22999,
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    highlights: ["Ancient Temples", "Sacred Rituals", "Meditation Sessions", "Pilgrimage Sites"],
    sections: [
      { id: "overview", title: "Overview", content: "India's temple trail offers a spiritual journey through some of the world's most sacred sites, from the ghats of Varanasi to the temples of Tamil Nadu." },
      { id: "accommodation", title: "Accommodation", content: "Stay in ashrams, temple guesthouses, or nearby heritage hotels. Experience the spiritual ambiance while enjoying comfortable accommodations." },
    ],
  },
  {
    id: "kerala-cuisine",
    title: "Kerala Cuisine Tour",
    subtitle: "Flavors of God's Own Country",
    description: "Savor the authentic tastes of Kerala through cooking classes, spice plantation visits, and culinary experiences across this foodie paradise.",
    image: keralaImg,
    price: 19999,
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    highlights: ["Cooking Classes", "Spice Gardens", "Toddy Shops", "Seafood Feasts"],
    sections: [
      { id: "overview", title: "Overview", content: "Kerala's cuisine is a symphony of coconut, spices, and fresh seafood. Experience the flavors that make this region a culinary destination." },
      { id: "accommodation", title: "Accommodation", content: "Stay at properties known for their exceptional cuisine, from heritage hotels to homestays where meals are the highlight." },
    ],
  },
  {
    id: "filming-locations",
    title: "Filming Locations",
    subtitle: "Lights, Camera, India!",
    description: "Discover the stunning locations that have served as backdrops for Bollywood blockbusters and international films across India.",
    image: ladakhImg,
    price: 35999,
    duration: "7 Days / 6 Nights",
    rating: 4.6,
    highlights: ["Bollywood Sites", "Scenic Backdrops", "Studio Tours", "Photography Spots"],
    sections: [
      { id: "overview", title: "Overview", content: "From the dramatic landscapes of Ladakh to the beaches of Goa, explore the iconic locations that have captured filmmakers' imaginations." },
      { id: "accommodation", title: "Accommodation", content: "Stay at properties featured in films or near famous shooting locations for the ultimate cinematic experience." },
    ],
  },
];
