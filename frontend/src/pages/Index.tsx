import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, MapPin, Users, Award, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";
import BookingModal from "@/components/BookingModal";
import { destinations } from "@/data/destinations";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<typeof destinations[0] | null>(null);
  const navigate = useNavigate();

  const handleBook = (id: string) => {
    const dest = destinations.find((d) => d.id === id);
    setSelectedDestination(dest || null);
    setIsBookingOpen(true);
  };

  const stats = [
    { icon: MapPin, value: "50+", label: "Destinations" },
    { icon: Users, value: "10K+", label: "Happy Travelers" },
    { icon: Award, value: "15+", label: "Years in Business" },
    { icon: Compass, value: "100+", label: "Tour Packages" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroBg}
          aria-hidden
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground/60 z-10" />

        <div className="relative z-20 container mx-auto px-4 pt-20 text-center">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6">
              ✈️ Discover India's Hidden Gems
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight">
              Turn Your <span className="text-sunset">Travel Dreams</span> Into Reality
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8 max-w-2xl mx-auto">
              Discover breathtaking destinations, create unforgettable memories, and embark on adventures that will last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/destinations">
                <Button variant="gradient" size="xl" className="group">
                  View Destinations
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button variant="hero" size="xl" onClick={() => navigate('/plan')}>
                Book Your Trip
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-background/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 rounded-full bg-background/50 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 -mt-16 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ocean-light mb-3">
                  <stat.icon className="h-6 w-6 text-ocean" />
                </div>
                <p className="font-display text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium">Popular Destinations</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Discover Amazing Places
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From serene backwaters to majestic mountains, discover our handpicked destinations for your next adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div
                key={destination.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <DestinationCard {...destination} onBook={handleBook} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/destinations">
              <Button variant="outline" size="lg" className="group">
                View All Destinations
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium">Why Choose Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Travel With Confidence & Style
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Expert Local Guides", desc: "Our knowledgeable guides ensure authentic adventures at every destination." },
                  { title: "Customized Itineraries", desc: "Every trip is tailored to your preferences, budget, and travel style." },
                  { title: "24/7 Support", desc: "Round-the-clock assistance ensures you're never alone on your journey." },
                  { title: "Best Price Guarantee", desc: "We offer competitive pricing without compromising on quality." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tropical-light flex items-center justify-center">
                      <span className="text-tropical font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={destinations[0].image}
                  alt="Kerala"
                  className="rounded-2xl h-48 md:h-64 object-cover w-full"
                />
                <img
                  src={destinations[1].image}
                  alt="Andaman"
                  className="rounded-2xl h-48 md:h-64 object-cover w-full mt-8"
                />
                <img
                  src={destinations[2].image}
                  alt="Ladakh"
                  className="rounded-2xl h-48 md:h-64 object-cover w-full -mt-8"
                />
                <img
                  src={destinations[3].image}
                  alt="Goa"
                  className="rounded-2xl h-48 md:h-64 object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of happy travelers who have discovered their dream destinations with us.
          </p>
          <Button variant="hero" size="xl" onClick={() => navigate('/plan')}>
            Book Your Trip Now
          </Button>
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        destination={selectedDestination ? { title: selectedDestination.title, price: selectedDestination.price } : undefined}
      />
    </main>
  );
};

export default Index;
