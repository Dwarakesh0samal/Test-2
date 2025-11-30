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

export const EXPLORE_MENU = [];
export const EXPERIENCE_MENU = [];
export const PLAN_MENU = [];
