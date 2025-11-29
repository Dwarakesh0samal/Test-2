import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MegaMenuCardProps {
  label: string;
  slug: string;
  icon: LucideIcon;
  description: string;
  tab?: string;
  onClick?: () => void;
}

const MegaMenuCard = ({ label, slug, icon: Icon, description, tab, onClick }: MegaMenuCardProps) => {
  const href = tab ? `/destination/${slug}?tab=${tab}` : `/destination/${slug}`;

  return (
    <Link
      to={href}
      onClick={onClick}
      className={cn(
        "flex items-start gap-3 p-3 rounded-xl transition-all duration-200",
        "hover:bg-primary/10 group"
      )}
    >
      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
          {label}
        </p>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default MegaMenuCard;
