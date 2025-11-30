import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Plane, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import MegaMenuCard from "@/components/nav/MegaMenuCard";
import MobileNavMenu from "@/components/nav/MobileNavMenu";
import { EXPLORE_MENU, EXPERIENCE_MENU, PLAN_MENU } from "@/data/navigationData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
              <Plane className="h-5 w-5" />
            </div>
            <span className="font-display text-xl md:text-2xl font-semibold text-foreground">
              Destination <span className="text-primary">Dreamers</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                location.pathname === "/"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Home
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                {/* EXPLORE Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground bg-transparent">
                    Explore
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-card/95 backdrop-blur-md rounded-2xl shadow-xl border border-border">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-3 px-3">
                        Explore Destinations
                      </h3>
                      <div className="grid gap-1">
                        {EXPLORE_MENU.map((item) => (
                          <MegaMenuCard key={item.label} {...item} />
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* EXPERIENCE Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground bg-transparent">
                    Experience
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-card/95 backdrop-blur-md rounded-2xl shadow-xl border border-border">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-3 px-3">
                        Unique Experiences
                      </h3>
                      <div className="grid gap-1">
                        {EXPERIENCE_MENU.map((item) => (
                          <MegaMenuCard key={item.label} {...item} />
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* PLAN Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground bg-transparent">
                    Plan
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-card/95 backdrop-blur-md rounded-2xl shadow-xl border border-border">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-3 px-3">
                        Plan Your Trip
                      </h3>
                      <div className="grid gap-1">
                        {PLAN_MENU.map((item) => (
                          <MegaMenuCard key={item.label} {...item} />
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/destinations"
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                location.pathname === "/destinations"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Destinations
            </Link>

            <Link
              to="/about"
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                location.pathname === "/about"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                location.pathname === "/contact"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Contact
            </Link>

            <Link to="/plan">
              <Button variant="gradient" size="lg">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-b border-border animate-fade-up max-h-[80vh] overflow-y-auto">
            <MobileNavMenu onNavigate={closeMenu} />
            <div className="p-4 border-t border-border">
              <Link to="/plan">
                <Button variant="gradient" size="lg" className="w-full">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
