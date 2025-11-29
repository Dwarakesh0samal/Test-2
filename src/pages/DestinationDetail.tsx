import { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate, Link, useSearchParams, useLocation } from "react-router-dom";
import { ArrowLeft, MapPin, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { destinations } from "@/data/destinations";

const accommodationOptions = [
  { id: "standard", label: "Standard", multiplier: 1, description: "Comfortable rooms with basic amenities" },
  { id: "deluxe", label: "Deluxe", multiplier: 1.4, description: "Spacious rooms with premium amenities" },
  { id: "luxury", label: "Luxury", multiplier: 1.9, description: "Premium suites with exclusive services" },
];

const daysOptions = [
  { days: 3, label: "3 Days / 2 Nights" },
  { days: 5, label: "5 Days / 4 Nights" },
];

const addonsOptions = [
  { id: "breakfast", label: "Breakfast", pricePerDay: 200, oneTime: false },
  { id: "airport", label: "Airport Pickup", price: 500, oneTime: true },
  { id: "guide", label: "Local Guide", price: 1000, oneTime: true },
];

const defaultSections = [
  { id: "overview", title: "Overview", content: "Discover the beauty and wonder of this amazing destination. Experience local culture, stunning landscapes, and unforgettable memories." },
  { id: "accommodation", title: "Accommodation", content: "Choose from a variety of accommodation options ranging from budget-friendly to luxury stays, all carefully selected for comfort and convenience." },
  { id: "itineraries", title: "Itineraries", content: "Our expert-crafted itineraries ensure you experience the best of this destination, with flexible options to suit your preferences." },
  { id: "events", title: "Events", content: "Join local festivals, cultural events, and seasonal celebrations that bring this destination to life throughout the year." },
];

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const destination = destinations.find((d) => d.id === id);

  const [selectedDays, setSelectedDays] = useState(3);
  const [accommodation, setAccommodation] = useState("standard");
  const [addons, setAddons] = useState<string[]>([]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  // Handle tab from URL
  const tabFromUrl = searchParams.get("tab") || location.hash.replace("#", "") || "overview";
  const [activeTab, setActiveTab] = useState(tabFromUrl);

  // Scroll to section when tab changes or on load
  useEffect(() => {
    if (tabFromUrl && tabFromUrl !== "overview") {
      setActiveTab(tabFromUrl);
      setTimeout(() => {
        const element = document.getElementById(`section-${tabFromUrl}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [tabFromUrl]);

  const sections = destination?.sections || defaultSections;
  const basePricePerDay = destination ? Math.round(destination.price / 5) : 0;

  const totalPrice = useMemo(() => {
    if (!destination) return 0;

    const accommodationMultiplier = accommodationOptions.find((a) => a.id === accommodation)?.multiplier || 1;
    const baseTotal = basePricePerDay * selectedDays * accommodationMultiplier;

    const addonsTotal = addons.reduce((sum, addonId) => {
      const addon = addonsOptions.find((a) => a.id === addonId);
      if (!addon) return sum;
      if (addon.oneTime) {
        return sum + addon.price;
      }
      return sum + addon.pricePerDay * selectedDays;
    }, 0);

    return Math.round(baseTotal + addonsTotal);
  }, [basePricePerDay, selectedDays, accommodation, addons, destination]);

  const handleAddonToggle = (addonId: string) => {
    setAddons((prev) =>
      prev.includes(addonId)
        ? prev.filter((id) => id !== addonId)
        : [...prev, addonId]
    );
  };

  if (!destination) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-16 container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Destination Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            We couldn't find a destination with ID "{id}". This destination may be coming soon!
          </p>
          <Link to="/destinations">
            <Button variant="outline">Browse All Destinations</Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-24 left-4 md:left-8 flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm text-foreground hover:bg-card transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 text-background/80 mb-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{destination.subtitle}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4">
              {destination.title}
            </h1>
            <div className="flex items-center gap-4 text-background/80">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 text-sunset fill-sunset" />
                <span className="font-medium">{destination.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Sections */}
      <section id="section-tabs" className="py-8 border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full justify-start gap-2 bg-transparent h-auto flex-wrap">
              {sections.map((section) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full"
                >
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-1 gap-8 lg:gap-12">
            {/* Left Column - Description & Highlights */}
            <div className="space-y-8">
              {/* Tab Content */}
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={`section-${section.id}`}
                  className={activeTab === section.id ? "block" : "hidden"}
                >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                    {section.content}
                  </p>
                </div>
              ))}

              {/* Description */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  About This Destination
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {destination.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Trip Highlights
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {destination.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-muted rounded-xl"
                    >
                      <div className="p-2 rounded-full bg-tropical-light">
                        <Check className="h-4 w-4 text-tropical" />
                      </div>
                      <span className="font-medium text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        destination={{ title: destination.title, price: totalPrice }}
      />
    </main>
  );
};

export default DestinationDetail;
