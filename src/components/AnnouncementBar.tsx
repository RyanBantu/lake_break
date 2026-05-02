import { Link } from "react-router-dom";

const AnnouncementBar = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-gradient-to-r from-[hsl(38_35%_22%)] via-[hsl(38_30%_18%)] to-[hsl(220_12%_10%)] text-[10px] sm:text-[11px] md:text-xs font-bold tracking-[0.14em] sm:tracking-[0.2em] uppercase text-center text-[hsl(40_35%_88%)] py-2.5 px-3 sm:px-4 leading-snug border-b border-primary/25">
        <Link to="/#shop" className="hover:text-primary transition-colors inline-block max-w-[100%]">
          New arrivals — shop the shore
        </Link>
      </div>
      <div className="bg-[hsl(220_12%_9%)] text-[10px] sm:text-[11px] text-xs font-medium text-center text-muted-foreground py-2.5 px-3 sm:px-4 leading-relaxed border-b border-primary/15">
        <span className="font-body tracking-wide">
          Free shipping on orders over $100 · US only
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
