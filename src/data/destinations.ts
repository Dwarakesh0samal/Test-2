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
    description: "Cruise through serene backwaters on traditional houseboats, explore lush tea plantations, and experience authentic Ayurvedic wellness in this tropical paradise.",
    image: keralaImg,
    price: 25999,
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    highlights: ["Houseboat Stay", "Tea Plantations", "Ayurvedic Spa", "Kathakali Show"],
    sections: [
      { id: "overview", title: "Overview", content: "Kerala, known as God's Own Country, offers a unique blend of serene backwaters, lush hill stations, and rich cultural heritage. From the tranquil houseboats of Alleppey to the misty peaks of Munnar, every moment is magical." },
      { id: "accommodation", title: "Accommodation", content: "Choose from luxury houseboats, heritage hotels, eco-resorts nestled in tea plantations, and traditional homestays. Our accommodation partners ensure authentic Kerala hospitality with modern comforts." },
      { id: "itineraries", title: "Itineraries", content: "Day 1: Arrive Cochin, heritage walk. Day 2: Drive to Munnar, tea gardens. Day 3: Munnar sightseeing. Day 4: Alleppey houseboat. Day 5: Departure with memories." },
      { id: "events", title: "Events", content: "Experience Onam festival (Aug-Sep), Thrissur Pooram elephant festival, traditional Kathakali performances, and snake boat races during monsoon season." },
      { id: "wellness", title: "Wellness", content: "Kerala is the birthplace of Ayurveda. Experience traditional treatments, yoga retreats, meditation centers, and rejuvenating spa therapies at certified wellness centers." },
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
      { id: "itineraries", title: "Itineraries", content: "Day 1: Arrive Port Blair, Cellular Jail. Day 2-3: Havelock Island, Radhanagar Beach. Day 4: Neil Island. Day 5: Water activities. Day 6: Departure." },
      { id: "events", title: "Events", content: "Island Tourism Festival (Jan), Beach festivals, underwater photography competitions, and local tribal cultural shows throughout the year." },
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
      { id: "itineraries", title: "Itineraries", content: "Day 1-2: Arrive Leh, acclimatization. Day 3: Nubra Valley via Khardung La. Day 4: Pangong Lake. Day 5-6: Monasteries and local exploration. Day 7: Departure." },
      { id: "events", title: "Events", content: "Hemis Festival (June-July), Ladakh Festival (Sept), Losar New Year celebrations, and monastery prayer ceremonies throughout the year." },
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
      { id: "itineraries", title: "Itineraries", content: "Day 1: Arrive, beach relaxation. Day 2: North Goa beaches, Fort Aguada. Day 3: Old Goa churches, spice plantation. Day 4: Water sports, departure." },
      { id: "events", title: "Events", content: "Sunburn Festival (Dec), Goa Carnival (Feb), Christmas and New Year celebrations, Shigmo festival (March), and beach parties year-round." },
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
      { id: "itineraries", title: "Itineraries", content: "Explore curated heritage circuits covering multiple UNESCO sites, ancient temples, and historical monuments with expert guides." },
      { id: "events", title: "Events", content: "Heritage walks, sound and light shows at monuments, cultural festivals at historical sites, and special museum exhibitions." },
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
      { id: "itineraries", title: "Itineraries", content: "Visit multiple sacred sites with guided tours explaining religious significance, architectural beauty, and cultural practices." },
      { id: "events", title: "Events", content: "Temple festivals, aarti ceremonies, full moon celebrations, and major Hindu festivals throughout the year." },
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
      { id: "itineraries", title: "Itineraries", content: "Day 1: Food walk in Kochi. Day 2: Spice plantation, cooking class. Day 3: Toddy shop, seafood market. Day 4: Farewell feast." },
      { id: "events", title: "Events", content: "Food festivals, cooking competitions, spice harvest seasons, and traditional feast preparations during Onam." },
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
      { id: "itineraries", title: "Itineraries", content: "Visit multiple filming locations with behind-the-scenes stories, photography opportunities, and meet local film industry contacts." },
      { id: "events", title: "Events", content: "Film festivals, movie screenings at iconic locations, and celebrity encounters during shooting seasons." },
    ],
  },
];
