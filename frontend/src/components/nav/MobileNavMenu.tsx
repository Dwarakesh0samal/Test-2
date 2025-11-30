import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { EXPLORE_MENU, EXPERIENCE_MENU, PLAN_MENU, MenuItemType } from "@/data/navigationData";

interface MobileNavMenuProps {
  onNavigate: () => void;
}

interface MobileMenuSectionProps {
  title: string;
  items: MenuItemType[];
  onNavigate: () => void;
}

const MobileMenuSection = ({ title, items, onNavigate }: MobileMenuSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 px-4 text-foreground font-medium"
      >
        {title}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <div className="pb-3 px-4 space-y-1">
          {items.map((item) => {
            const Icon = item.icon;
            const href = item.tab
              ? `/destination/${item.slug}?tab=${item.tab}`
              : `/destination/${item.slug}`;

            return (
              <Link
                key={item.label}
                to={href}
                onClick={onNavigate}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const MobileNavMenu = ({ onNavigate }: MobileNavMenuProps) => {
  return (
    <div className="bg-card border-b border-border">
      <MobileMenuSection title="Explore" items={EXPLORE_MENU} onNavigate={onNavigate} />
      <MobileMenuSection title="Experience" items={EXPERIENCE_MENU} onNavigate={onNavigate} />
      <MobileMenuSection title="Plan" items={PLAN_MENU} onNavigate={onNavigate} />
      
      <div className="p-4 space-y-2">
        <Link
          to="/"
          onClick={onNavigate}
          className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          Home
        </Link>
        <Link
          to="/destinations"
          onClick={onNavigate}
          className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          Destinations
        </Link>
        <Link
          to="/about"
          onClick={onNavigate}
          className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          About
        </Link>
        <Link
          to="/contact"
          onClick={onNavigate}
          className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MobileNavMenu;
