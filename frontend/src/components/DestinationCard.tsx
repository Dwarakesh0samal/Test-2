import { useNavigate } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DestinationCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  onBook: (id: string) => void;
}

const DestinationCard = ({
  id,
  title,
  subtitle,
  description,
  image,
  price,
  rating,
  onBook,
}: DestinationCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/destination/${id}`);
  };

  return (
    <div 
      className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 card-hover border border-border cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm text-sm font-medium">
          <Star className="h-4 w-4 text-sunset fill-sunset" />
          <span>{rating}</span>
        </div>

        {/* Location */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-background">
          <MapPin className="h-4 w-4" />
          <span className="text-sm font-medium">{subtitle}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Price & Button */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <span className="text-xs text-muted-foreground">Starting from</span>
            <p className="text-xl font-bold text-primary">₹{price.toLocaleString()}</p>
          </div>
          <Button 
            variant="sunset" 
            onClick={(e) => {
              e.stopPropagation();
              onBook(id);
            }}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
