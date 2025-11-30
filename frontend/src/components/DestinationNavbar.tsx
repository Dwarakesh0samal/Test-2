import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Menu, X, Plane, ChevronDown, Waves, Landmark, Church, TreePine, UtensilsCrossed, Theater, Mountain, Sparkles, Hotel, Map, Calendar, Film, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { destinations } from "@/data/destinations";

interface MenuItemType {
  label: string;
  tab: string;
  icon: LucideIcon;
  description: string;
}

const EXPLORE_ITEMS: MenuItemType[] = [
  { label: "Overview", tab: "overview", icon: Waves, description: "Discover what makes this destination special" },
  { label: "Attractions", tab: "overview", icon: Landmark, description: "Top places to visit and explore" },
  { label: "Culture", tab: "overview", icon: Church, description: "Local traditions and heritage" },
  { label: "Nature", tab: "overview", icon: TreePine, description: "Natural wonders and landscapes" },
];

const EXPERIENCE_ITEMS: MenuItemType[] = [
  { label: "Food & Cuisine", tab: "food", icon: UtensilsCrossed, description: "Local delicacies and restaurants" },
  { label: "Activities", tab: "overview", icon: Theater, description: "Things to do and experiences" },
  { label: "Adventure", tab: "overview", icon: Mountain, description: "Outdoor activities and sports" },
  { label: "Wellness", tab: "wellness", icon: Sparkles, description: "Spa, yoga and relaxation" },
];

const PLAN_ITEMS: MenuItemType[] = [
  { label: "Accommodation", tab: "accommodation", icon: Hotel, description: "Hotels, resorts and stays" },
  { label: "Itineraries", tab: "itineraries", icon: Map, description: "Pre-planned trip packages" },
  { label: "Events", tab: "events", icon: Calendar, description: "Festivals and local events" },
  { label: "Filming Locations", tab: "filming", icon: Film, description: "Famous movie locations" },
];

interface DestinationNavbarProps {
  onTabChange: (tab: string) => void;
  activeTab: string;
}

const DestinationNavbar = ({ onTabChange, activeTab }: DestinationNavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const destination = destinations.find((d) => d.id === id);

  const handleTabClick = (tab: string) => {
    onTabChange(tab);
    setIsOpen(false);
  };

  const renderMenuItems = (items: MenuItemType[], title: string) => (
    <div className="w-[350px] p-4 bg-card/95 backdrop-blur-md rounded-2xl shadow-xl border border-border">
      <h3 className="font-display text-lg font-semibold text-foreground mb-3 px-3">
        {title}
      </h3>
      <div className="grid gap-1">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={() => handleTabClick(item.tab)}
            className={cn(
              "flex items-start gap-3 p-3 rounded-xl transition-all duration-200 text-left w-full",
              activeTab === item.tab
                ? "bg-primary/10 text-primary"
                : "hover:bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            <div className={cn(
              "p-2 rounded-lg transition-colors",
              activeTab === item.tab ? "bg-primary text-primary-foreground" : "bg-muted"
            )}>
              <item.icon className="h-4 w-4" />
            </div>
            <div>
              <span className="font-medium block">{item.label}</span>
              <span className="text-xs text-muted-foreground">{item.description}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderMobileMenu = (items: MenuItemType[], menuName: string) => (
    <div className={cn(
      "overflow-hidden transition-all duration-300",
      openMobileMenu === menuName ? "max-h-96" : "max-h-0"
    )}>
      <div className="py-2 pl-4 space-y-1">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={() => handleTabClick(item.tab)}
            className={cn(
              "flex items-center gap-3 w-full px-4 py-2 rounded-lg text-sm transition-colors",
              activeTab === item.tab
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

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
          <div className="hidden lg:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                {/* EXPLORE Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground bg-transparent">
                    Explore
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {renderMenuItems(EXPLORE_ITEMS, `Explore ${destination?.title || "Destination"}`)}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* EXPERIENCE Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground bg-transparent">
                    Experience
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {renderMenuItems(EXPERIENCE_ITEMS, "Unique Experiences")}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* PLAN Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground bg-transparent">
                    Plan
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {renderMenuItems(PLAN_ITEMS, "Plan Your Trip")}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/destinations">
              <Button variant="outline" size="sm">
                All Destinations
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
            <div className="p-4 space-y-2">
              {/* Explore Accordion */}
              <button
                onClick={() => setOpenMobileMenu(openMobileMenu === "explore" ? null : "explore")}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-muted"
              >
                <span>Explore</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", openMobileMenu === "explore" && "rotate-180")} />
              </button>
              {renderMobileMenu(EXPLORE_ITEMS, "explore")}

              {/* Experience Accordion */}
              <button
                onClick={() => setOpenMobileMenu(openMobileMenu === "experience" ? null : "experience")}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-muted"
              >
                <span>Experience</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", openMobileMenu === "experience" && "rotate-180")} />
              </button>
              {renderMobileMenu(EXPERIENCE_ITEMS, "experience")}

              {/* Plan Accordion */}
              <button
                onClick={() => setOpenMobileMenu(openMobileMenu === "plan" ? null : "plan")}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-muted"
              >
                <span>Plan</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", openMobileMenu === "plan" && "rotate-180")} />
              </button>
              {renderMobileMenu(PLAN_ITEMS, "plan")}

              <Link
                to="/destinations"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                All Destinations
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DestinationNavbar;
