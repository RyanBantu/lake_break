import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-lake.jpg";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col shadow-lg shadow-black/40 border-b border-primary/10">
        <AnnouncementBar />
        <Navbar />
      </header>

      <main className="pt-[var(--header-h,8.75rem)]">
        <section className="relative min-h-[42vh] md:min-h-[48vh] overflow-hidden flex items-end">
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/55 to-black/35" />
          <div className="relative z-10 container mx-auto px-4 pb-16 md:pb-20 pt-10 max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="font-body text-[11px] font-bold tracking-[0.28em] uppercase text-primary mb-4"
            >
              About us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl text-[hsl(40_28%_96%)] leading-[1.08]"
            >
              Rarely do we sit.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="font-body text-lg md:text-xl text-white/85 mt-6 max-w-xl leading-relaxed"
            >
              The quick version of how Lake Break went from hammock hour at the cottage to everything you see here.
            </motion.p>
          </div>
        </section>

        <article className="container mx-auto px-4 py-14 md:py-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm beachy-shell px-6 py-8 md:px-10 md:py-10 mb-12 md:mb-16"
          >
            <p className="font-display text-2xl md:text-3xl text-foreground leading-snug text-center">
              We believe in working hard, showing up for family, and offering a hand when someone needs a lift.
            </p>
          </motion.div>

          <div className="space-y-8 md:space-y-10 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            <p className="text-foreground/95">
              We&apos;re one big family with big dreams—and schedules that rarely slow down. Between jobs, side hustles,
              and everyone asking what&apos;s for dinner, true downtime doesn&apos;t happen often.
            </p>
            <p>
              In the summer of 2025 we finally chased a little R&amp;R and headed to a cottage in{" "}
              <span className="text-foreground font-medium">Elk Rapids, Michigan</span>. The kids disappeared into games of
              backyard Blitzball; Dad negotiated permanent custody of the hammock. Same messy joy, better backdrop than
              our driveway.
            </p>
            <p>
              After one particularly spirited inning, one of our daughters walked over—hair tangled, grin earned—and
              said the quiet part out loud:
            </p>
          </div>

          <motion.figure
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="my-12 md:my-14 py-10 px-6 md:px-12 rounded-2xl bg-gradient-to-br from-primary/12 via-transparent to-transparent border border-primary/25 text-center"
          >
            <blockquote className="font-display text-2xl md:text-3xl lg:text-[2rem] text-foreground leading-snug">
              &ldquo;Hey—I think it&apos;s time for a{' '}
              <span className="text-primary italic">lake break.</span>&rdquo;
            </blockquote>
            <figcaption className="font-body text-sm text-muted-foreground mt-6 tracking-wide">
              One sentence. Zero rehearsal.
            </figcaption>
          </motion.figure>

          <div className="space-y-8 md:space-y-10 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Dad leaned forward like someone had said the Wi-Fi password out loud.{' '}
              <span className="text-foreground font-medium">&ldquo;Say that again.&rdquo;</span>
            </p>
            <p className="text-foreground/95">
              <span className="font-semibold text-primary">A lake break.</span> Not just clocking out—permission to
              breathe where the trees lean over the water and the afternoon gets lazy on purpose. That was the name.
              That was the vibe.
            </p>
            <p>
              Lake Break is our nod to that feeling—premium casual, sun-on-the-dock energy, and gear that looks at home
              whether you&apos;re closing emails off-hours or walking barefoot off the boat.
            </p>
          </div>

          <div className="mt-14 md:mt-16 pt-12 border-t border-primary/15 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
            <Button variant="lake" size="lg" asChild>
              <Link to="/#shop">Shop the shore</Link>
            </Button>
            <Button variant="lakeOutline" size="lg" asChild>
              <Link to="/#contact">Get in touch</Link>
            </Button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default About;
