// Rich content data for each destination

export interface Hotel {
  name: string;
  image: string;
  rating: number;
  priceRange: string;
  description: string;
  website: string;
}

export interface Event {
  name: string;
  image: string;
  videoUrl?: string;
  date: string;
  description: string;
}

export interface Itinerary {
  days: number;
  title: string;
  image: string;
  highlights: string[];
  price: number;
}

export interface FoodItem {
  name: string;
  image: string;
  description: string;
  mustTry: boolean;
}

export interface DestinationContent {
  overview: string;
  food: FoodItem[];
  hotels: Hotel[];
  events: Event[];
  itineraries: Itinerary[];
  wellness?: string;
}

export const destinationContent: Record<string, DestinationContent> = {
  kerala: {
    overview: "Kerala, known as God's Own Country, offers a unique blend of serene backwaters, lush hill stations, and rich cultural heritage. From the tranquil houseboats of Alleppey to the misty peaks of Munnar, every moment is magical. Enjoy traditional Kathakali performances, savor authentic cuisine, and rejuvenate with Ayurvedic treatments.",
    food: [
      { name: "Appam with Stew", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400", description: "Soft, fluffy rice pancakes served with coconut milk-based vegetable or chicken stew", mustTry: true },
      { name: "Karimeen Pollichathu", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400", description: "Pearl spot fish marinated in spices, wrapped in banana leaf and grilled to perfection", mustTry: true },
      { name: "Kerala Sadya", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400", description: "Traditional vegetarian feast served on banana leaf with 20+ dishes", mustTry: true },
      { name: "Puttu & Kadala", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400", description: "Steamed rice cake cylinders served with spiced black chickpea curry", mustTry: false },
    ],
    hotels: [
      { name: "Kumarakom Lake Resort", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", rating: 4.9, priceRange: "₹25,000 - ₹50,000", description: "Luxury heritage resort on the banks of Vembanad Lake with traditional Kerala architecture", website: "https://www.kumarakomlakeresort.in" },
      { name: "Taj Bekal Resort & Spa", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400", rating: 4.8, priceRange: "₹20,000 - ₹45,000", description: "Cliff-top resort with private pool villas overlooking the Arabian Sea", website: "https://www.tajhotels.com" },
      { name: "Coconut Lagoon", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400", rating: 4.7, priceRange: "₹15,000 - ₹30,000", description: "Eco-friendly heritage resort accessible only by boat through the backwaters", website: "https://www.cghearth.com" },
      { name: "Spice Village", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400", rating: 4.6, priceRange: "₹12,000 - ₹25,000", description: "Eco-tourism resort in Thekkady surrounded by spice plantations", website: "https://www.cghearth.com" },
    ],
    events: [
      { name: "Onam Festival", image: "https://images.unsplash.com/photo-1598518619776-eae3f8a34eac?w=400", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", date: "August - September", description: "Kerala's grandest festival celebrating the homecoming of King Mahabali with flower carpets, boat races, and traditional feasts" },
      { name: "Thrissur Pooram", image: "https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?w=400", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", date: "April - May", description: "Spectacular elephant festival featuring decorated elephants, percussion music, and grand fireworks" },
      { name: "Nehru Trophy Boat Race", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400", date: "August", description: "Famous snake boat race on Punnamada Lake with traditional Chundan Vallam boats" },
      { name: "Theyyam Festival", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400", date: "November - May", description: "Ancient ritualistic art form with elaborate costumes and divine performances" },
    ],
    itineraries: [
      { days: 3, title: "Kerala Express", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400", highlights: ["Cochin Heritage Walk", "Munnar Tea Gardens", "Kathakali Show"], price: 15999 },
      { days: 5, title: "Backwater Bliss", image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=400", highlights: ["Alleppey Houseboat", "Kumarakom Bird Sanctuary", "Ayurvedic Spa", "Cooking Class", "Fort Kochi"], price: 25999 },
      { days: 7, title: "Complete Kerala", image: "https://images.unsplash.com/photo-1609340583496-8b5f0f1e69b4?w=400", highlights: ["Munnar Hills", "Thekkady Wildlife", "Alleppey Backwaters", "Kovalam Beach", "Ayurvedic Retreat", "Cultural Shows"], price: 35999 },
    ],
    wellness: "Kerala is the birthplace of Ayurveda. Enjoy traditional Panchakarma treatments, yoga retreats in serene ashrams, meditation sessions by the backwaters, and rejuvenating spa therapies at certified wellness centers throughout the state.",
  },
  andaman: {
    overview: "The Andaman Islands offer pristine beaches, turquoise waters, and some of the best diving spots in Asia. Discover untouched nature, historical sites like Cellular Jail, and vibrant marine life. Perfect for beach lovers, adventure seekers, and those seeking tropical paradise.",
    food: [
      { name: "Grilled Lobster", image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400", description: "Fresh lobster grilled with local spices and served with coconut rice", mustTry: true },
      { name: "Fish Curry", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400", description: "Traditional fish curry made with fresh catch and coconut milk", mustTry: true },
      { name: "Coconut Prawn Curry", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Succulent prawns in rich coconut gravy with local spices", mustTry: false },
      { name: "Crab Masala", image: "https://images.unsplash.com/photo-1606850246029-3ac009947a3c?w=400", description: "Fresh mud crabs cooked in spicy masala preparation", mustTry: true },
    ],
    hotels: [
      { name: "Taj Exotica Resort", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400", rating: 4.9, priceRange: "₹30,000 - ₹60,000", description: "Luxury beachfront resort with overwater villas and private beaches", website: "https://www.tajhotels.com" },
      { name: "Barefoot at Havelock", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400", rating: 4.7, priceRange: "₹18,000 - ₹35,000", description: "Eco-friendly resort with cottages nestled among tropical trees", website: "https://www.barefootindia.com" },
      { name: "Symphony Palms", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", rating: 4.5, priceRange: "₹8,000 - ₹15,000", description: "Beach resort near Radhanagar Beach with comfortable amenities", website: "https://www.symphonypalms.com" },
      { name: "SeaShell Resort", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400", rating: 4.6, priceRange: "₹12,000 - ₹25,000", description: "Contemporary resort with diving center and water sports facilities", website: "https://www.seashellhotels.net" },
    ],
    events: [
      { name: "Island Tourism Festival", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400", date: "January", description: "Annual festival showcasing local culture, food, music, and adventure sports" },
      { name: "Beach Festival", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400", date: "December - January", description: "Celebration of beach culture with water sports competitions and live music" },
      { name: "Subhash Mela", image: "https://images.unsplash.com/photo-1598518619776-eae3f8a34eac?w=400", date: "January 23", description: "Cultural fair commemorating Netaji Subhas Chandra Bose's visit to the islands" },
    ],
    itineraries: [
      { days: 3, title: "Island Hopper", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400", highlights: ["Cellular Jail", "Radhanagar Beach", "Snorkeling"], price: 18999 },
      { days: 5, title: "Andaman Explorer", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400", highlights: ["Port Blair Tour", "Havelock Island", "Neil Island", "Scuba Diving", "Glass Bottom Boat"], price: 32999 },
      { days: 7, title: "Ultimate Andaman", image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=400", highlights: ["All Major Islands", "PADI Certification", "Night Kayaking", "Fishing Trip", "Mangrove Tour", "Beach Camping"], price: 45999 },
    ],
  },
  ladakh: {
    overview: "Ladakh, the land of high passes, offers breathtaking landscapes, ancient Buddhist monasteries, and adventure at every turn. Discover the raw beauty of the Himalayas, serene lakes, and a unique Tibetan-influenced culture that will leave you spellbound.",
    food: [
      { name: "Momos", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400", description: "Tibetan dumplings filled with meat or vegetables, served with spicy chutney", mustTry: true },
      { name: "Thukpa", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400", description: "Hearty noodle soup perfect for the cold climate", mustTry: true },
      { name: "Skyu", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400", description: "Traditional Ladakhi pasta made with root vegetables", mustTry: false },
      { name: "Butter Tea", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400", description: "Salted tea churned with yak butter - a local specialty", mustTry: true },
    ],
    hotels: [
      { name: "The Grand Dragon", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", rating: 4.8, priceRange: "₹15,000 - ₹30,000", description: "Premium hotel in Leh with stunning mountain views and modern amenities", website: "https://www.thegranddragonladakh.com" },
      { name: "Pangong Lake Camp", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400", rating: 4.6, priceRange: "₹8,000 - ₹15,000", description: "Luxury camping by the stunning blue Pangong Lake", website: "https://www.ladakhtourism.com" },
      { name: "Stok Palace Heritage", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400", rating: 4.7, priceRange: "₹12,000 - ₹25,000", description: "Stay in a 200-year-old royal palace with authentic Ladakhi hospitality", website: "https://www.stokpalace.com" },
      { name: "Nubra Eco Lodge", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400", rating: 4.5, priceRange: "₹6,000 - ₹12,000", description: "Eco-friendly camp in Nubra Valley with double-humped camel safaris", website: "https://www.ladakhtourism.com" },
    ],
    events: [
      { name: "Hemis Festival", image: "https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?w=400", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", date: "June - July", description: "Largest monastery festival with masked dances celebrating Guru Padmasambhava's birthday" },
      { name: "Ladakh Festival", image: "https://images.unsplash.com/photo-1598518619776-eae3f8a34eac?w=400", date: "September", description: "Cultural extravaganza showcasing traditional music, dance, archery, and polo" },
      { name: "Losar", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400", date: "December - January", description: "Ladakhi New Year celebrations with traditional ceremonies and festivities" },
      { name: "Dosmoche Festival", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400", date: "February", description: "Prayer festival at Leh and Likir monasteries with sacred mask dances" },
    ],
    itineraries: [
      { days: 3, title: "Leh Essentials", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400", highlights: ["Leh Palace", "Shanti Stupa", "Magnetic Hill", "Monasteries"], price: 15999 },
      { days: 5, title: "Ladakh Adventure", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400", highlights: ["Khardung La Pass", "Nubra Valley", "Pangong Lake", "Camel Safari", "Monastery Tours"], price: 28999 },
      { days: 7, title: "Complete Ladakh", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400", highlights: ["All Major Passes", "Tso Moriri Lake", "Pangong Lake", "Nubra Valley", "Zanskar Valley", "River Rafting", "Mountain Biking"], price: 42999 },
    ],
  },
  goa: {
    overview: "Goa combines Portuguese heritage with Indian culture, offering stunning beaches, vibrant nightlife, delicious cuisine, and a laid-back atmosphere that keeps visitors coming back. From historic churches to beach shacks, water sports to casino nights, Goa has it all.",
    food: [
      { name: "Goan Fish Curry", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400", description: "Tangy coconut-based curry with fresh fish - the state's signature dish", mustTry: true },
      { name: "Bebinca", image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400", description: "Traditional 16-layer Goan dessert made with coconut milk and eggs", mustTry: true },
      { name: "Prawn Balchao", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Spicy prawn pickle with Goan spices - a Portuguese-influenced delicacy", mustTry: true },
      { name: "Vindaloo", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400", description: "Famous Goan pork dish with wine, vinegar and spices", mustTry: false },
    ],
    hotels: [
      { name: "Taj Exotica", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", rating: 4.9, priceRange: "₹25,000 - ₹50,000", description: "Mediterranean-inspired luxury resort on Benaulim Beach with golf course", website: "https://www.tajhotels.com" },
      { name: "W Goa", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400", rating: 4.8, priceRange: "₹20,000 - ₹40,000", description: "Trendy beach resort with stunning design and vibrant nightlife", website: "https://www.marriott.com" },
      { name: "Alila Diwa Goa", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400", rating: 4.7, priceRange: "₹15,000 - ₹30,000", description: "Contemporary resort surrounded by paddy fields with excellent spa", website: "https://www.alilahotels.com" },
      { name: "Palolem Beach Resort", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400", rating: 4.4, priceRange: "₹5,000 - ₹12,000", description: "Beachfront cottages on the beautiful Palolem Beach", website: "https://www.goatourism.gov.in" },
    ],
    events: [
      { name: "Sunburn Festival", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", date: "December", description: "Asia's biggest electronic dance music festival with international DJs" },
      { name: "Goa Carnival", image: "https://images.unsplash.com/photo-1598518619776-eae3f8a34eac?w=400", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", date: "February", description: "Four-day festival of parades, music, and dancing before Lent" },
      { name: "Shigmo Festival", image: "https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?w=400", date: "March", description: "Goa's version of Holi with colorful processions and folk performances" },
      { name: "Christmas & New Year", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400", date: "December 25 - January 1", description: "Goa's biggest celebration with midnight masses, beach parties, and fireworks" },
    ],
    itineraries: [
      { days: 3, title: "Goa Getaway", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400", highlights: ["North Goa Beaches", "Fort Aguada", "Night Markets", "Beach Parties"], price: 12999 },
      { days: 5, title: "Goa Discovery", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400", highlights: ["North & South Beaches", "Old Goa Churches", "Spice Plantation", "Dudhsagar Falls", "Water Sports"], price: 19999 },
      { days: 7, title: "Complete Goa", image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=400", highlights: ["All Beaches", "Heritage Tour", "Adventure Sports", "Nightlife", "Cooking Class", "Island Trip", "Casino Night"], price: 28999 },
    ],
  },
  "heritage-trails": {
    overview: "India's heritage trails take you through millennia of history, from ancient temples to Mughal monuments, showcasing architectural marvels and cultural treasures. Walk through UNESCO World Heritage sites, visit royal palaces, and discover stories that shaped civilizations.",
    food: [
      { name: "Royal Thali", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400", description: "Traditional multi-course meal served in heritage style", mustTry: true },
      { name: "Street Food Trail", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400", description: "Local delicacies unique to each heritage city", mustTry: true },
    ],
    hotels: [
      { name: "Umaid Bhawan Palace", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", rating: 5.0, priceRange: "₹50,000 - ₹200,000", description: "One of the world's largest private residences, now a luxury heritage hotel", website: "https://www.tajhotels.com" },
      { name: "Oberoi Amarvilas", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400", rating: 4.9, priceRange: "₹40,000 - ₹100,000", description: "Luxury hotel with uninterrupted views of the Taj Mahal", website: "https://www.oberoihotels.com" },
    ],
    events: [
      { name: "Taj Mahotsav", image: "https://images.unsplash.com/photo-1598518619776-eae3f8a34eac?w=400", date: "February", description: "Cultural festival celebrating Indian arts, crafts, and heritage near Taj Mahal" },
      { name: "Heritage Walks", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400", date: "Year-round", description: "Guided tours through historical monuments and old city quarters" },
    ],
    itineraries: [
      { days: 3, title: "Golden Triangle Express", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400", highlights: ["Delhi", "Agra", "Jaipur"], price: 22999 },
      { days: 5, title: "Heritage Trail", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400", highlights: ["Taj Mahal", "Red Fort", "Hawa Mahal", "Amber Fort", "Qutub Minar"], price: 32999 },
      { days: 7, title: "Royal Rajasthan", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400", highlights: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer", "Palace Stays"], price: 45999 },
    ],
  },
  "temple-trail": {
    overview: "India's temple trail offers a spiritual journey through some of the world's most sacred sites. From the ghats of Varanasi to the temples of Tamil Nadu, experience divine architecture, ancient rituals, and profound spirituality.",
    food: [
      { name: "Temple Prasad", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400", description: "Sacred food offerings from various temples", mustTry: true },
      { name: "Sattvic Meals", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400", description: "Pure vegetarian cuisine following spiritual principles", mustTry: true },
    ],
    hotels: [
      { name: "Taj Ganges Varanasi", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", rating: 4.7, priceRange: "₹12,000 - ₹25,000", description: "Elegant hotel near the sacred ghats of Varanasi", website: "https://www.tajhotels.com" },
      { name: "Vivanta Madurai", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400", rating: 4.6, priceRange: "₹10,000 - ₹20,000", description: "Modern comfort near the magnificent Meenakshi Temple", website: "https://www.tajhotels.com" },
    ],
    events: [
      { name: "Ganga Aarti", image: "https://images.unsplash.com/photo-1598518619776-eae3f8a34eac?w=400", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", date: "Daily at sunset", description: "Mesmerizing fire ceremony on the ghats of Varanasi" },
      { name: "Kumbh Mela", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400", date: "Every 12 years", description: "World's largest spiritual gathering with millions of pilgrims" },
    ],
    itineraries: [
      { days: 3, title: "Varanasi Spiritual", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400", highlights: ["Ganga Aarti", "Temple Tours", "Boat Ride"], price: 15999 },
      { days: 5, title: "South Temple Trail", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400", highlights: ["Madurai", "Rameswaram", "Thanjavur", "Pondicherry"], price: 24999 },
      { days: 7, title: "Complete Pilgrimage", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400", highlights: ["Varanasi", "Haridwar", "Rishikesh", "Mathura", "Vrindavan"], price: 32999 },
    ],
  },
  "kerala-cuisine": {
    overview: "Kerala's cuisine is a symphony of coconut, spices, and fresh seafood. Experience the flavors that make this region a culinary destination with cooking classes, spice plantation visits, and authentic food trails.",
    food: [
      { name: "Sadya Feast", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400", description: "Grand vegetarian feast with 26+ dishes on banana leaf", mustTry: true },
      { name: "Malabar Biryani", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400", description: "Fragrant rice dish unique to the Malabar coast", mustTry: true },
      { name: "Toddy Shop Experience", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400", description: "Traditional Kerala meals with palm toddy", mustTry: true },
    ],
    hotels: [
      { name: "Brunton Boatyard", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", rating: 4.8, priceRange: "₹15,000 - ₹30,000", description: "Heritage hotel in Fort Kochi known for exceptional cuisine", website: "https://www.cghearth.com" },
    ],
    events: [
      { name: "Onam Sadya Festival", image: "https://images.unsplash.com/photo-1598518619776-eae3f8a34eac?w=400", date: "August - September", description: "Traditional feast celebrations during Onam festival" },
    ],
    itineraries: [
      { days: 3, title: "Food Trail Express", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400", highlights: ["Cooking Class", "Spice Garden", "Food Walk"], price: 12999 },
      { days: 5, title: "Culinary Journey", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400", highlights: ["Multiple Cooking Classes", "Toddy Shop", "Seafood Markets", "Home Dining"], price: 19999 },
    ],
  },
  "filming-locations": {
    overview: "From the dramatic landscapes of Ladakh to the beaches of Goa, explore the iconic locations that have captured filmmakers' imaginations. Visit spots from Bollywood blockbusters and international productions.",
    food: [
      { name: "Movie Set Cafe", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400", description: "Themed cafes at popular filming locations", mustTry: false },
    ],
    hotels: [
      { name: "Film City Hotel", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", rating: 4.5, priceRange: "₹8,000 - ₹15,000", description: "Stay near popular filming locations", website: "https://www.filmcityhotels.com" },
    ],
    events: [
      { name: "Film Festival", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", date: "November", description: "International film festivals showcasing world cinema" },
    ],
    itineraries: [
      { days: 3, title: "Bollywood Trail", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400", highlights: ["Mumbai Film City", "Iconic Locations", "Studio Tour"], price: 18999 },
      { days: 5, title: "Cinema Locations", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400", highlights: ["Ladakh - 3 Idiots", "Goa Beaches", "Rajasthan Palaces", "Kerala Backwaters"], price: 32999 },
    ],
  },
};
