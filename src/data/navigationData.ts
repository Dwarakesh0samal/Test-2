import { Waves, Landmark, Church, TreePine, UtensilsCrossed, Theater, Mountain, Sparkles, Hotel, Map, Calendar, Film, LucideIcon } from "lucide-react";

export interface MenuItemType {
  label: string;
  slug: string;
  icon: LucideIcon;
  description: string;
  tab?: string;
}

export const DESTINATION_MAP: Record<string, string> = {
  "Beach": "goa",
  "Heritage": "heritage-trails",
  "Spirituality": "temple-trail",
  "Nature & Wildlife": "andaman",
  "Food & Cuisine": "kerala-cuisine",
  "Culture": "kerala",
  "Adventure": "ladakh",
  "Wellness & Spa": "kerala",
  "Accommodation": "kerala",
  "Itineraries": "kerala",
  "Events & Festivals": "goa",
  "Filming Locations": "filming-locations",
};

export const EXPLORE_MENU: MenuItemType[] = [
  { label: "Beach", slug: "goa", icon: Waves, description: "Sun-kissed beaches and coastal paradise" },
  { label: "Heritage", slug: "heritage-trails", icon: Landmark, description: "Historical monuments and ancient sites" },
  { label: "Spirituality", slug: "temple-trail", icon: Church, description: "Sacred temples and spiritual journeys" },
  { label: "Nature & Wildlife", slug: "andaman", icon: TreePine, description: "Pristine forests and exotic wildlife" },
];

export const EXPERIENCE_MENU: MenuItemType[] = [
  { label: "Food & Cuisine", slug: "kerala-cuisine", icon: UtensilsCrossed, description: "Authentic local flavors and culinary delights" },
  { label: "Culture", slug: "kerala", icon: Theater, description: "Traditional arts and cultural experiences" },
  { label: "Adventure", slug: "ladakh", icon: Mountain, description: "Thrilling activities and outdoor expeditions" },
  { label: "Wellness & Spa", slug: "kerala", icon: Sparkles, description: "Rejuvenating retreats and Ayurvedic treatments", tab: "wellness" },
];

export const PLAN_MENU: MenuItemType[] = [
  { label: "Accommodation", slug: "kerala", icon: Hotel, description: "Hotels, resorts and homestays", tab: "accommodation" },
  { label: "Itineraries", slug: "kerala", icon: Map, description: "Curated travel plans and routes", tab: "itineraries" },
  { label: "Events & Festivals", slug: "goa", icon: Calendar, description: "Local celebrations and seasonal events", tab: "events" },
  { label: "Filming Locations", slug: "filming-locations", icon: Film, description: "Scenic spots for film and photography" },
];
