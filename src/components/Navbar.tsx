import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LakeBreakLogo from "@/components/LakeBrakeLogo";

const navLinks = [
  { label: "Shop", to: "/#shop" },
  { label: "Contact", to: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className="relative bg-[hsl(220_12%_9%)] border-b border-primary/20">
      <div className="container mx-auto flex items-center justify-between gap-3 min-h-14 md:min-h-[4.25rem] h-14 md:h-[4.25rem] px-3 sm:px-4">
        <Link to="/" className="flex items-center group shrink min-w-0 py-1 pr-2">
          <span className="transition-opacity duration-300 group-hover:opacity-90 inline-flex items-center">
            <LakeBreakLogo
              variant="dark"
              heightClass="max-h-8 sm:max-h-9 md:max-h-11"
            />
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-6 lg:gap-10 shrink-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-foreground/85 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-1 shrink-0">
          <button
            type="button"
            aria-label="Search"
            className="text-foreground/70 hover:text-primary transition-colors p-2.5 rounded-sm hover:bg-white/5"
          >
            <Search size={20} strokeWidth={2} />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="text-foreground/70 hover:text-primary transition-colors p-2.5 rounded-sm hover:bg-white/5"
          >
            <ShoppingBag size={20} strokeWidth={2} />
          </button>
        </div>

        <button
          type="button"
          className="md:hidden flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-foreground hover:bg-white/10 active:bg-white/15 touch-manipulation"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-[100] bg-black/65 backdrop-blur-[2px] md:hidden touch-manipulation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="fixed inset-y-0 right-0 z-[110] flex w-[min(100%,18.5rem)] flex-col bg-[hsl(220_12%_11%)] shadow-2xl shadow-black/50 border-l border-primary/25 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 320 }}
            >
              <div className="flex items-center justify-between gap-3 border-b border-primary/20 px-4 py-4 pt-[max(1rem,env(safe-area-inset-top))]">
                <span className="font-body text-xs font-bold tracking-[0.22em] uppercase text-primary">Menu</span>
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-md text-foreground hover:bg-white/10 touch-manipulation"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X size={22} strokeWidth={2} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto overscroll-contain px-3 py-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.label === "Shop" ? "/shop/t-shirts" : link.to}
                        className="flex min-h-[48px] items-center rounded-lg px-4 font-body text-sm font-semibold tracking-[0.14em] uppercase text-foreground active:bg-white/10"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-primary/15 pt-6 px-1">
                  <p className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground px-3 mb-3">
                    Quick actions
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="flex flex-1 min-h-[48px] items-center justify-center gap-2 rounded-lg border border-primary/25 bg-background/40 px-3 font-body text-xs font-semibold uppercase tracking-wide text-foreground hover:bg-white/5 touch-manipulation"
                      aria-label="Search"
                    >
                      <Search size={18} strokeWidth={2} />
                      Search
                    </button>
                    <button
                      type="button"
                      className="flex flex-1 min-h-[48px] items-center justify-center gap-2 rounded-lg border border-primary/25 bg-background/40 px-3 font-body text-xs font-semibold uppercase tracking-wide text-foreground hover:bg-white/5 touch-manipulation"
                      aria-label="Cart"
                    >
                      <ShoppingBag size={18} strokeWidth={2} />
                      Cart
                    </button>
                  </div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
