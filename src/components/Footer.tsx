import { Link } from "react-router-dom";
import LakeBreakLogo from "@/components/LakeBrakeLogo";
import heronLakebreak from "@/assets/heron-lakebreak-4.svg";

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
              T-shirts, mugs, hats, and hoodies for barefoot days, boardwalk nights, and every shade of summer.
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
              <li>
                <Link to="/shop/hats" className="hover:text-primary transition-colors">
                  Hats
                </Link>
              </li>
              <li>
                <Link to="/shop/hoodies" className="hover:text-primary transition-colors">
                  Hoodies
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-body text-xs font-bold tracking-[0.12em] uppercase text-primary/70 mb-5">Company</h4>
            <ul className="space-y-3 font-body text-sm text-foreground/75">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About us
                </Link>
              </li>
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

        <div className="relative mt-20 pt-10">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-4 sm:right-10 md:right-16 -top-24 h-32 w-24 sm:-top-28 sm:h-36 sm:w-28 md:-top-32 md:h-40 md:w-32 bg-primary"
            style={{
              WebkitMaskImage: `url(${heronLakebreak})`,
              maskImage: `url(${heronLakebreak})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center bottom",
              maskPosition: "center bottom",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 14"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 top-0 h-3 w-full text-primary/40"
          >
            <path
              d="M0 7 Q 50 0 100 7 T 200 7 T 300 7 T 400 7 T 500 7 T 600 7 T 700 7 T 800 7 T 900 7 T 1000 7 T 1100 7 T 1200 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
            <path
              d="M0 11 Q 60 4 120 11 T 240 11 T 360 11 T 480 11 T 600 11 T 720 11 T 840 11 T 960 11 T 1080 11 T 1200 11"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs text-muted-foreground">
              © {new Date().getFullYear()} Lake Break. All rights reserved.
            </p>
            <p className="font-body text-xs tracking-wide text-muted-foreground inline-flex items-center gap-2">
              Lake
              <svg
                aria-hidden="true"
                viewBox="0 0 28 10"
                className="h-2 w-7 text-primary/70"
              >
                <path
                  d="M1 5 Q 5 1 9 5 T 17 5 T 25 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              Break
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
