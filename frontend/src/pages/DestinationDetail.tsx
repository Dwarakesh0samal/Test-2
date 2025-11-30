import { useState, useEffect } from "react";
import { useParams, Link, useSearchParams, useLocation } from "react-router-dom";
import { ArrowLeft, MapPin, Star, Clock, Check, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DestinationNavbar from "@/components/DestinationNavbar";
import Footer from "@/components/Footer";
import { destinations } from "@/data/destinations";
import { destinationContent } from "@/data/destinationContent";

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const destination = destinations.find((d) => d.id === id);
  const content = id ? destinationContent[id] : null;
  
  const tabFromUrl = searchParams.get("tab") || location.hash.replace("#", "") || "overview";
  const [activeTab, setActiveTab] = useState(tabFromUrl);

  useEffect(() => {
    if (tabFromUrl) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  if (!destination) {
    return (
      <main className="min-h-screen bg-background">
        <DestinationNavbar onTabChange={setActiveTab} activeTab={activeTab} />
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

  const renderOverviewTab = () => (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-4">
          About {destination.title}
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          {content?.overview || destination.description}
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-4">
          Trip Highlights
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {destination.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-muted rounded-xl">
              <div className="p-2 rounded-full bg-tropical-light">
                <Check className="h-4 w-4 text-tropical" />
              </div>
              <span className="font-medium text-foreground">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFoodTab = () => (
    <div className="space-y-8">
      <h2 className="font-display text-2xl font-bold text-foreground">
        Local Cuisine & Specialties
      </h2>
      <p className="text-muted-foreground">
        Discover the authentic flavors and culinary traditions of {destination.title}.
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        {content?.food?.map((item, index) => (
          <div key={index} className="bg-card rounded-xl border border-border overflow-hidden card-hover">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-semibold text-foreground">{item.name}</h3>
                {item.mustTry && (
                  <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-full font-medium">
                    Must Try
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAccommodationTab = () => (
    <div className="space-y-8">
      <h2 className="font-display text-2xl font-bold text-foreground">
        Hotels & Resorts
      </h2>
      <p className="text-muted-foreground">
        Find the perfect stay for your {destination.title} adventure.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {content?.hotels?.map((hotel, index) => (
          <div key={index} className="bg-card rounded-xl border border-border overflow-hidden card-hover">
            <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display font-semibold text-foreground text-lg">{hotel.name}</h3>
                <div className="flex items-center gap-1 text-sunset">
                  <Star className="h-4 w-4 fill-sunset" />
                  <span className="font-medium text-sm">{hotel.rating}</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-3">{hotel.description}</p>
              <p className="text-primary font-semibold mb-4">{hotel.priceRange} / night</p>
              <a href={hotel.website} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="w-full gap-2">
                  View More <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEventsTab = () => (
    <div className="space-y-8">
      <h2 className="font-display text-2xl font-bold text-foreground">
        Events & Festivals
      </h2>
      <p className="text-muted-foreground">
        Discover the vibrant culture and celebrations of {destination.title}.
      </p>
      <div className="space-y-6">
        {content?.events?.map((event, index) => (
          <div key={index} className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img src={event.image} alt={event.name} className="w-full h-64 object-cover" />
                {event.videoUrl && (
                  <a 
                    href={event.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-foreground/30 hover:bg-foreground/40 transition-colors"
                  >
                    <div className="p-4 rounded-full bg-primary text-primary-foreground">
                      <Play className="h-8 w-8" />
                    </div>
                  </a>
                )}
              </div>
              <div className="p-6 flex flex-col justify-center">
                <span className="text-primary text-sm font-medium mb-2">{event.date}</span>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{event.name}</h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderItinerariesTab = () => (
    <div className="space-y-8">
      <h2 className="font-display text-2xl font-bold text-foreground">
        Pre-made Trip Packages
      </h2>
      <p className="text-muted-foreground">
        Choose from our carefully curated itineraries for {destination.title}.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {content?.itineraries?.map((itinerary, index) => (
          <div key={index} className="bg-card rounded-xl border border-border overflow-hidden card-hover">
            <div className="relative">
              <img src={itinerary.image} alt={itinerary.title} className="w-full h-48 object-cover" />
              <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                {itinerary.days} Days
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display font-semibold text-foreground text-lg mb-3">{itinerary.title}</h3>
              <ul className="space-y-1 mb-4">
                {itinerary.highlights.slice(0, 4).map((highlight, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-3 w-3 text-tropical" />
                    {highlight}
                  </li>
                ))}
                {itinerary.highlights.length > 4 && (
                  <li className="text-sm text-muted-foreground">+{itinerary.highlights.length - 4} more</li>
                )}
              </ul>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-muted-foreground">Starting from</span>
                  <p className="text-xl font-bold text-primary">₹{itinerary.price.toLocaleString()}</p>
                </div>
                <Button variant="gradient" size="sm">
                  View More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWellnessTab = () => (
    <div className="space-y-8">
      <h2 className="font-display text-2xl font-bold text-foreground">
        Wellness & Spa
      </h2>
      <p className="text-muted-foreground leading-relaxed text-lg">
        {content?.wellness || `Rejuvenating wellness treatments and spa services in ${destination.title}. From traditional therapies to modern wellness retreats, find your path to relaxation and renewal.`}
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-display font-semibold text-foreground mb-3">Traditional Treatments</h3>
          <p className="text-muted-foreground text-sm">Authentic healing practices passed down through generations.</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-display font-semibold text-foreground mb-3">Yoga & Meditation</h3>
          <p className="text-muted-foreground text-sm">Guided sessions in serene settings.</p>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return renderOverviewTab();
      case "food":
        return renderFoodTab();
      case "accommodation":
        return renderAccommodationTab();
      case "events":
        return renderEventsTab();
      case "itineraries":
        return renderItinerariesTab();
      case "wellness":
        return renderWellnessTab();
      default:
        return renderOverviewTab();
    }
  };

  const availableTabs = [
    { id: "overview", label: "Overview" },
    { id: "accommodation", label: "Accommodation" },
    { id: "itineraries", label: "Itineraries" },
    { id: "events", label: "Events" },
    ...(content?.wellness ? [{ id: "wellness", label: "Wellness" }] : []),
  ];

  return (
    <main className="min-h-screen bg-background">
      <DestinationNavbar onTabChange={setActiveTab} activeTab={activeTab} />

      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        
        {/* Back Button */}
        <Link
          to="/destinations"
          className="absolute top-24 left-4 md:left-8 flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm text-foreground hover:bg-card transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">Back</span>
        </Link>

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
              <div className="flex items-center gap-1">
                <Clock className="h-5 w-5" />
                <span>{destination.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-6 border-b border-border bg-card sticky top-16 md:top-20 z-40">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full justify-start gap-2 bg-transparent h-auto flex-wrap">
              {availableTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {renderTabContent()}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DestinationDetail;
