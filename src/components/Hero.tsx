import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-lake.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen min-h-dvh w-full overflow-hidden pt-[var(--header-h,8.75rem)] flex flex-col">
      <img
        src={heroImage}
        alt="Serene lake at golden hour with a wooden dock"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/45" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent mix-blend-overlay" />

      {/* Large screens only: absolute card (md would match phone landscape ≥768px and block the lake) */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:flex absolute left-0 right-0 z-20 justify-center px-4 sm:px-6 top-[var(--header-h,8.75rem)]"
        role="status"
        aria-live="polite"
      >
        <div className="w-full max-w-2xl rounded-2xl border border-primary/35 bg-gradient-to-b from-black/45 via-black/35 to-black/25 backdrop-blur-xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.65)] ring-1 ring-white/10">
          <div className="relative px-5 py-3.5 sm:px-8 sm:py-4 text-center">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <p className="font-display text-[13px] sm:text-sm md:text-base font-semibold tracking-[0.12em] uppercase text-primary">
              Coming soon
            </p>
            <p className="font-body mt-1.5 text-[11px] sm:text-xs md:text-sm text-[hsl(40_22%_92%)]/90 leading-snug font-medium">
              Full checkout is on the way — preview tees, mugs &amp; hats below.
            </p>
            <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
          </div>
        </div>
      </motion.div>

      {/* Below lg: horizontal snap strip (phones stay &lt;1024 — avoids overlay card in landscape) */}
      <div className="lg:hidden relative z-20 w-full shrink-0 pt-2">
        <div className="relative mx-2 sm:mx-3">
          <div
            aria-label="Announcements"
            role="region"
            className="flex touch-pan-x gap-2.5 overflow-x-auto snap-x snap-mandatory scroll-pb-1 scroll-pl-3 scroll-pr-3 py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="snap-center shrink-0 w-[min(calc(100vw-2.25rem),19.5rem)] rounded-xl border border-primary/35 bg-black/45 backdrop-blur-xl px-3.5 py-2.5 shadow-lg ring-1 ring-white/10"
              role="status"
            >
              <p className="font-display text-[11px] font-semibold tracking-[0.12em] uppercase text-primary">
                Coming soon
              </p>
              <p className="font-body mt-1 text-[11px] leading-snug text-[hsl(40_22%_92%)]/90">
                Full checkout is on the way — preview the shop below.
              </p>
            </motion.div>
            <Link
              to="/#shop"
              className="snap-center shrink-0 w-[min(calc(100vw-2.25rem),19.5rem)] flex flex-col justify-center rounded-xl border border-primary/28 bg-black/38 backdrop-blur-md px-3.5 py-2.5 text-left shadow-md ring-1 ring-white/8 active:scale-[0.99] transition-transform"
            >
              <span className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Preview</span>
              <span className="font-body text-sm font-semibold text-white mt-0.5 inline-flex items-center gap-0.5">
                Shop collection <ChevronRight className="h-4 w-4 shrink-0 opacity-75" aria-hidden />
              </span>
            </Link>
            <div className="snap-center shrink-0 w-[min(calc(100vw-2.25rem),19.5rem)] rounded-xl border border-white/10 bg-black/35 backdrop-blur-md px-3.5 py-2.5 ring-1 ring-white/5">
              <p className="font-body text-[10px] font-bold uppercase tracking-[0.18em] text-primary/90">Shipping</p>
              <p className="font-body text-[11px] text-[hsl(40_22%_92%)]/85 mt-1 leading-snug">
                Free US shipping on orders over $100.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-1 left-0 w-6 bg-gradient-to-r from-black/55 to-transparent rounded-l-lg" />
          <div className="pointer-events-none absolute inset-y-1 right-0 w-6 bg-gradient-to-l from-black/55 to-transparent rounded-r-lg" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-end flex-1 min-h-0 px-4 pb-14 md:pb-20 max-w-[1400px] mx-auto w-full">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-body text-[11px] font-bold tracking-[0.28em] uppercase text-primary mb-5"
          >
            Lake Break
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="font-billboard text-[clamp(2.5rem,9vw,5.25rem)] sm:text-[clamp(2.75rem,9vw,5.5rem)] leading-[0.95] tracking-[0.02em] text-[hsl(40_28%_96%)] uppercase"
          >
            Sun soaked days
            <span className="block text-[hsl(40_22%_88%)] mt-1 sm:mt-2">and campfire nights</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="font-body text-base md:text-lg text-foreground/75 mt-8 max-w-xl leading-relaxed font-medium"
          >
            Boardshorts-for-the-soul energy: soft layers, sun-faded metals, and gear for dock days, early swims, and
            nights that go long after the stars come out.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Button variant="lake" size="lg" asChild>
              <a href="#shop">Shop the shore</a>
            </Button>
            <Button variant="lakeOutline" size="lg" asChild>
              <a href="#contact">Contact</a>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
