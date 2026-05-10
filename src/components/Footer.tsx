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
          <svg
            aria-hidden="true"
            viewBox="345 70 345 685"
            fill="currentColor"
            preserveAspectRatio="xMidYMax meet"
            className="pointer-events-none absolute right-4 sm:right-10 md:right-16 -top-24 h-32 w-16 sm:-top-28 sm:h-36 sm:w-[4.5rem] md:-top-32 md:h-44 md:w-24 text-primary"
          >
            <path d="M513.98,509.5c-.84,16.29,4.3,24.04,2.2,34.58-1.74,8.73-3.14,16.82-3.13,26.08l.08,165.63c0,9.59,6.86,17.4,15.58,18.4l12.28,1.41c10.12,1.16,19.62.73,30.34,3.1-5.93,4.58-12.53,5.23-19.36,5.4l-42.98,1.1c-18.25.47-35.78,1.67-53.89-.35-3.9-.43-6.71-1.37-10.59-3.95,3.94-1.47,6.44-2.19,9.89-2.55l30.72-3.17c11.44-1.18,17.07-11.39,17.08-22.29l.25-166.84c.01-9-1.3-16.71-3.27-25.28-1.43-6.22,1.28-12.46,1.74-18.82,1.03-14.15-1.22-27.88-4.12-41.91-7.47-36.18-4.76-72.05,10.37-105.93,12.56-28.13,18.68-58.03,16.46-88.78-1.41-19.47-8.34-36.11-18.31-52.66l-20.27-33.65c-10.27-17.05-17.53-52.59-7.19-66.08,1.68-2.2.97-3.62,1.49-5.9,2.96-13.01,17-19.74,29.47-19.16,4.91.23,7.71-.5,12.77,2.48l-12.02,4.37c9.98,2.07,19.94,1.68,30.45.2,8.09-1.14,15.84-.74,23.97-.2,14.63.97,36.34-1.29,37.52,1.34,1.64,3.67-1.26,15.38-8.8,19.36-6.14,3.24-12.83,3.61-18.78-.48-5.87-4.04-3.79-11.39-7.93-14.61l-7.43,14.38c-4.82,9.32-17.96,13.33-26.59,7.48-5.88-3.99-6.23-11.6-5.71-18.17l-20.34-3.7c-9.15-1.66-19.83.18-25.25,8.05,8.06-4.07,15.01-9.3,23.57-4.97-3.3,2.65-6,6.37-7.15,10.7-10.4,39.13,27.31,68.51,44.77,109.02,15.63,36.24,11.79,75.98-.91,112.93s-22.75,71.93-24.71,109.92l-2.26,43.55v-.03Z" />
            <path d="M466.02,442.56c-10.88,10.3-23.03,17.35-35.09,25.52-8.1,5.49-10.61,14.87-16.54,23.67-.93-64.49,12.85-111.65,55.62-159.71l23.17-27.81c8.89-10.68,13.27-22.87,18.23-36.98,8.05,28.79,5.98,59.41-4.45,87.68-8.16,22.11-19.06,42.21-32.67,61.34l-29.48,36.69,22.51-20.67,25.64-27.94c-5.08,15.77-15.29,27.19-26.93,38.21h0ZM456.12,394.76c-4.25,23.23-12.62,43.39-24.17,63.22l9.44-10.63,24.12-30.91c19.06-24.43,38.41-67.97,41.17-98.74-8.21,18.88-17.82,38.52-37.26,46.7,3.96-8.66,9.56-15.1,14.49-22.49,10.02-15.04,19.75-30.15,24.28-48.29-7.77,12.1-15.17,23.29-24.62,33.98-20.37,23.04-41.08,48.89-50.57,78.56l18.02-18.19c4.13-4.16,7.69-8.9,11.37-13.6,5.14-6.56,14.99-12.67,20.94-8.8-3.6,8.15-8.62,13.64-14.9,18.89l-12.31,10.3h0ZM421.16,465.78l3.63-7.1c9.51-18.57,17.18-37.19,22.46-57.85l-10.39,8.15c-3.32,2.6-6.01,6.35-7.22,10.74-4.26,15.51-6.89,30.78-8.49,46.05h.01Z" />
            <path d="M395.76,157.62c29.73.35,53.78-13.23,70.85-39.04-14.67,7.4-28.32,10.44-43.71,7.63-8.02-1.47-16.12-4.19-22.38-10.67,29.15,7.98,53.06,4.26,75-16.96,18.89-18.27,46.64-22.54,69.94-11.33,6.8,4.3,13.9,8.31,14.76,17.92-29.17-20.34-68.2-16.53-86.17,15.94-6.35,11.48-14.24,21.41-24.68,29.2-15.22,11.37-35.04,16.04-53.62,7.31h0Z" />
            <path d="M567.4,161.66c-9.25,2.35-17.38,5.44-26.28,5.73-13.29.43-28.1-4.3-32.46-18.41,12.89,12.53,31.21,16.8,47.84,9.19-2.12-1.95-3.99-3.5-4.61-4.92-2.51-5.75,10.56-15.4,27.4-11.62,12.23,2.74,23.41,6.89,34.82,12.2,19.5,9.2,38.78,16.95,57.88,29.72-16.68-1.35-31.88-5.45-47.94-8.54-19.08-3.67-37.19-7.73-56.65-13.36h0ZM585.46,154.48c-6.86-1.93-13.27-4.41-20.97-3.83,17.8,5.95,34.93,11.76,53.74,15.35l-32.77-11.51h0Z" />
            <path d="M613.29,547.86l1.21,18.31c.1,1.58-2.09,5.24-3.53,5.95-5.37-5.44,1.3-17.02-4.03-31.08-2.9-7.65-8.78-13.34-16.08-17.37,5.57,10.5,7.12,27.85-.71,30.46,2.9-17.01-1.89-33.42-15.67-43.7-16.85-12.58-35.59-21.12-55.35-28.21l.26-14.31,22.53,14.28c14.37,9.11,28.82,18.49,44.52,25.05,6.01,2.51,9.88,2.98,13.46,9.4,1.75,3.14,6.77,8.06,9.64,10.47,6.31,5.31,8,10.63,10.8,17.81,4.36,11.2,9.67,21.99,8.04,34.48-.32,2.43-3.79,5.35-6.13,3.23-6.29-5.71.27-20.69-8.96-34.77h0Z" />
            <path d="M630.56,619.13c.02,4.29-4.4,5.61-7.08,5.06-3.09-.64-5.31-4.46-4.54-8.25l5.67-28.03,2.69,10.91c1.6,6.51,3.23,13.31,3.26,20.32h0Z" />
            <path d="M629.8,703.69c-1.37.76-4.81-.16-5.62-1.28-.93-1.28-2.66-4.8-2.22-6.31l6-20.59,4.93,16.72c1.12,3.78,1.61,8.84-3.09,11.46h0Z" />
            <path d="M631.74,659.54c.34,1.55-.41,4.62-1.25,5.61-.96,1.13-4.02,1.84-5.4,1.29s-3.46-3.65-3.15-5.21l4.87-24.41,4.92,22.71h.01Z" />
          </svg>
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
