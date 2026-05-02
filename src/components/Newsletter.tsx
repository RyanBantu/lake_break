import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section
      id="contact"
      className="py-20 md:py-24 px-4 bg-gradient-to-b from-background via-[hsl(220_12%_9%)] to-background border-y border-primary/15"
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-2xl text-center rounded-2xl bg-card beachy-shell border border-primary/25 px-6 py-12 md:py-14"
      >
        <p className="type-caps-label mb-3">Stay connected</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground">Notes from the shore</h2>
        <p className="font-body text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
          Restocks, campfire stories, and drops for people who live by the water.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-9">
          <Input
            type="email"
            placeholder="Your email"
            className="flex-1 bg-background border-primary/25 font-body rounded-lg h-12 focus-visible:ring-primary text-foreground placeholder:text-muted-foreground"
          />
          <Button variant="lake" type="submit" className="h-12 px-8 shrink-0 rounded-lg">
            Join us
          </Button>
        </form>
      </motion.div>
    </section>
  );
};

export default Newsletter;
