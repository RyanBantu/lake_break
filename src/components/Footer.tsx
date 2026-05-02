import { Link } from "react-router-dom";
import LakeBreakLogo from "@/components/LakeBrakeLogo";

const Footer = () => {
  return (
    <footer className="bg-[hsl(220_16%_4%)] text-foreground py-16 md:py-20 px-4 border-t border-primary/25 relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-30 pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <Link to="/" className="inline-flex items-center group">
              <span className="transition-opacity duration-300 group-hover:opacity-90 inline-flex">
                <LakeBreakLogo variant="dark" size={84} />
              </span>
            </Link>
            <p className="font-display text-2xl md:text-3xl text-[hsl(40_28%_94%)] mt-8 leading-snug">
              Sun soaked days & campfire nights
            </p>
            <p className="font-body text-sm text-muted-foreground mt-4 leading-relaxed max-w-sm">
              T-shirts and mugs for barefoot days, boardwalk nights, and every shade of summer.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h4 className="font-body text-xs font-bold tracking-[0.12em] uppercase text-primary/70 mb-5">Shop</h4>
            <ul className="space-y-3 font-body text-sm text-foreground/75">
              <li>
                <Link to="/shop/t-shirts" className="hover:text-primary transition-colors">
                  T-shirts
                </Link>
              </li>
              <li>
                <Link to="/shop/mugs" className="hover:text-primary transition-colors">
                  Mugs
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-body text-xs font-bold tracking-[0.12em] uppercase text-primary/70 mb-5">Company</h4>
            <ul className="space-y-3 font-body text-sm text-foreground/75">
              <li>
                <Link to="/#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-body text-xs font-bold tracking-[0.12em] uppercase text-primary/70 mb-5">Connect</h4>
            <ul className="space-y-3 font-body text-sm text-foreground/75">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-14 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lake Break. All rights reserved.
          </p>
          <p className="font-body text-xs tracking-wide text-muted-foreground">Lake ♦ Break</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
