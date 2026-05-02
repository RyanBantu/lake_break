import { motion } from "framer-motion";
import heroImage from "@/assets/hero-lake.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-[var(--header-h,8.75rem)]">
      <img
        src={heroImage}
        alt="Serene lake at golden hour with a wooden dock"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/45" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent mix-blend-overlay" />

      {/* Coming soon — on-image banner, sits flush below fixed header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 right-0 z-20 flex justify-center px-4 sm:px-6 top-[var(--header-h,8.75rem)]"
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
              Full checkout is on the way — preview tees &amp; mugs below.
            </p>
            <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 flex flex-col justify-end min-h-[calc(100svh-var(--header-h,8.75rem))] px-4 pb-14 md:pb-20 max-w-[1400px] mx-auto w-full">
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
