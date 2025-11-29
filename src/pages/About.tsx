import { Heart, Globe, Shield, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { destinations } from "@/data/destinations";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Travel",
      description: "We're not just travel agents – we're fellow adventurers who live and breathe exploration.",
    },
    {
      icon: Globe,
      title: "Sustainable Tourism",
      description: "We're committed to responsible travel that respects local communities and the environment.",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Your safety and peace of mind are our top priorities on every journey you take with us.",
    },
    {
      icon: Sparkles,
      title: "Unforgettable Experiences",
      description: "We create moments that become cherished memories lasting a lifetime.",
    },
  ];

  const team = [
    { name: "Priya Sharma", role: "Founder & CEO", avatar: "PS" },
    { name: "Rahul Verma", role: "Head of Operations", avatar: "RV" },
    { name: "Anita Desai", role: "Travel Designer", avatar: "AD" },
    { name: "Vikram Singh", role: "Customer Success", avatar: "VS" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium">Our Story</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              About Destination Dreamers
            </h1>
            <p className="text-muted-foreground text-lg">
              Born from a love of exploration and a desire to share India's incredible beauty with the world, 
              we've been crafting unforgettable travel experiences since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={destinations[0].image}
                alt="Our mission"
                className="rounded-2xl w-full h-80 object-cover shadow-lg"
              />
              <img
                src={destinations[2].image}
                alt="Our vision"
                className="rounded-2xl w-2/3 h-48 object-cover shadow-lg absolute -bottom-8 -right-4 border-4 border-background"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-4">
                At Destination Dreamers, we believe that travel has the power to transform lives. Our mission 
                is to make extraordinary travel experiences accessible to everyone, creating journeys that 
                inspire, educate, and connect people with the wonders of our diverse world.
              </p>
              <p className="text-muted-foreground">
                We work closely with local communities, support sustainable tourism practices, and ensure 
                that every trip we plan contributes positively to both our travelers and the destinations 
                they visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium">What Drives Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-ocean-light mb-4">
                  <value.icon className="h-7 w-7 text-ocean" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team section removed */}

      <Footer />
    </main>
  );
};

export default About;
