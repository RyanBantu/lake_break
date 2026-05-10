import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import tshirtImg from "@/assets/category-clothing.jpg";
import tshirtWarmSpotImg from "@/assets/tshirt-warm-spot.png";
import mugProductImg from "@/assets/mug-fathers-day-product.png";
import mugLifestyleImg from "@/assets/mug-fathers-day-lifestyle.png";
import hatLifestyleCoupleImg from "@/assets/hat-lifestyle-couple-lake-course.png";
import hoodieDustyRoseImg from "@/assets/hoodie-dusty-rose.png";

const MotionLink = motion(Link);

const categories = [
  {
    slug: "T-SHIRTS",
    name: "T-shirts",
    description: "Soft tees for dock days and sunset walks",
    image: tshirtImg,
    to: "/shop/t-shirts",
  },
  {
    slug: "MUGS",
    name: "Mugs",
    description: "Morning coffee & campfire cocoa — lake-house style",
    image: mugProductImg,
    to: "/shop/mugs",
  },
  {
    slug: "HATS",
    name: "Hats",
    description: "Mesh-back lids for the course, the dock, and the drive home",
    image: hatLifestyleCoupleImg,
    to: "/shop/hats",
  },
  {
    slug: "HOODIES",
    name: "Hoodies",
    description: "Midweight fleece with heron hex back prints — pier mornings to bonfire nights",
    image: hoodieDustyRoseImg,
    to: "/shop/hoodies",
  },
];

const Categories = () => {
  return (
    <section
      id="shop"
      className="py-16 md:py-24 px-0 md:px-4 bg-background border-y border-primary/15 scroll-mt-[calc(var(--header-h,8.75rem)+0.75rem)]"
    >
      <div className="container mx-auto px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12 md:mb-16 text-center max-w-2xl mx-auto"
        >
          <p className="type-caps-label mb-3">Shop</p>
          <h2 className="font-billboard text-4xl sm:text-5xl md:text-6xl text-foreground tracking-wide uppercase leading-none">
            Tees, mugs, hats &amp; hoodies
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-base md:text-lg">
            Tees, drinkware, lids, and fleece — gear up or gift something that feels like the lake.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px md:gap-0 max-w-6xl mx-auto bg-primary/20 md:bg-transparent">
          {categories.map((cat, i) => (
            <MotionLink
              key={cat.name}
              to={cat.to}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[4/5] bg-card cursor-pointer md:border md:border-primary/25 block"
            >
              {cat.secondaryImage ? (
                <div className="absolute inset-0 grid grid-rows-2 bg-[hsl(220_14%_8%)]">
                  {[cat.image, cat.secondaryImage].map((src, imageIndex) => (
                    <div key={src} className="relative overflow-hidden">
                      <img
                        src={src}
                        alt={imageIndex === 0 ? `${cat.name} lifestyle reference 1` : `${cat.name} lifestyle reference 2`}
                        className="h-full w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  loading="lazy"
                />
              )}
              {cat.secondaryImage ? (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 md:h-32 bg-gradient-to-t from-black/95 via-black/70 to-transparent" />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                <p className="font-billboard text-4xl md:text-5xl text-[hsl(40_30%_96%)] tracking-wide leading-none">
                  {cat.slug}
                </p>
                <p className="font-body text-sm text-white/70 mt-3 max-w-[14rem]">{cat.description}</p>
                <span className="inline-block font-body text-xs font-bold tracking-[0.2em] uppercase text-primary mt-5 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  View collection
                </span>
              </div>
            </MotionLink>
          ))}
        </div>

        <motion.div
          id="tshirts-warm-spot"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 md:mt-24 max-w-5xl mx-auto scroll-mt-[calc(var(--header-h,8.75rem)+1rem)]"
        >
          <div className="rounded-2xl bg-card border border-primary/25 overflow-hidden beachy-shell">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-square sm:aspect-[4/5] md:aspect-auto md:min-h-[380px] bg-[hsl(220_8%_18%)] p-6 sm:p-10 flex items-center justify-center">
                <img
                  src={tshirtWarmSpotImg}
                  alt='Lake Break tee: Never Trust a Warm Spot — cartoon of two kids in a lake with speech bubbles'
                  className="relative z-10 w-full max-w-md mx-auto object-contain drop-shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
                <p className="font-body text-[11px] font-bold tracking-[0.22em] uppercase text-primary mb-4">
                  Featured tee · T-shirts
                </p>
                <h3 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
                  Never trust a warm spot
                </h3>
                <p className="font-body text-muted-foreground mt-5 text-base leading-relaxed">
                  Lake humor on a soft cotton tee — for anyone who grew up swimming off the dock and learned the hard way
                  that some ripples are friendlier than others.
                </p>
                <p className="font-body text-muted-foreground mt-4 text-sm italic leading-relaxed border-l-2 border-primary/35 pl-4">
                  &ldquo;Dude, check out this warm spot!&rdquo; · &ldquo;Never trust a warm spot.&rdquo;
                </p>
                <Link
                  to="/shop/t-shirts/never-trust-a-warm-spot"
                  className="inline-block mt-8 font-body text-xs font-bold tracking-[0.18em] uppercase text-primary hover:text-primary/80 transition-colors"
                >
                  Shop the tee
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="mugs-gift"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 md:mt-24 max-w-5xl mx-auto scroll-mt-[calc(var(--header-h,8.75rem)+1rem)]"
        >
          <div className="rounded-2xl bg-card border border-primary/25 overflow-hidden beachy-shell">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[380px] bg-muted">
                <img
                  src={mugLifestyleImg}
                  alt="Son giving his father a Lake Break mug for Father's Day in a cozy cabin"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
                <p className="font-body text-[11px] font-bold tracking-[0.22em] uppercase text-primary mb-4">
                  Father&apos;s Day gift · Mugs
                </p>
                <h3 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
                  For the man who made you fall in love with camping
                </h3>
                <p className="font-body text-muted-foreground mt-5 text-base leading-relaxed">
                  The dad jokes, the trail maps, the first time you slept under real stars — say thanks with a mug made
                  for campfire mornings and the laugh-out-loud moments in between.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <img
                    src={mugProductImg}
                    alt="Lake Break mug: I see a bear spot"
                    className="w-28 h-28 md:w-32 md:h-32 object-contain rounded-lg border border-primary/20 bg-muted/50 shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">I see a bear spot</p>
                    <p className="font-body text-xs text-muted-foreground mt-1 max-w-[16rem]">
                      Lake Break ceramic mug — a gift that lands whether you&apos;re opening presents on the couch or
                      packing for the next trip.
                    </p>
                    <Link
                      to="/shop/mugs/i-see-a-bear-spot"
                      className="inline-block mt-4 font-body text-xs font-bold tracking-[0.18em] uppercase text-primary hover:text-primary/80 transition-colors"
                    >
                      Shop the mug
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
