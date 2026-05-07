import tshirtHero from "@/assets/category-clothing.jpg";
import tshirtWarmSpot from "@/assets/tshirt-warm-spot.png";
import tshirtBirdLegsLifestyle from "@/assets/tshirt-bird-legs-lifestyle.png";
import tshirtBirdLegsBack from "@/assets/tshirt-bird-legs-back.png";
import tshirtTrashyGulls from "@/assets/tshirt-dont-be-trashy-gulls.png";
import hatSunsetPink from "@/assets/hat-sunset-pink.png";
import hatLakeDayClassic from "@/assets/hat-lake-day-classic.png";
import hatFloralEscape from "@/assets/hat-floral-escape.png";
import hatCoastalMint from "@/assets/hat-coastal-mint.png";
import mugDetail from "@/assets/mug-fathers-day-product.png";
import mugLifestyle from "@/assets/mug-fathers-day-lifestyle.png";

export type ShopCategoryId = "t-shirts" | "mugs" | "hats";

export interface Product {
  id: string;
  slug: string;
  category: ShopCategoryId;
  name: string;
  priceCents: number;
  /** Card / listing copy */
  summary: string;
  /** Full PDP copy */
  description: string;
  /** Primary product image */
  image: string;
  /** Extra images (detail page gallery) */
  gallery?: string[];
  /** T-shirt sizes; omit for mugs and hats */
  sizes?: string[];
}

export const CATEGORY_LABELS: Record<ShopCategoryId, { title: string; blurb: string }> = {
  "t-shirts": {
    title: "T-shirts",
    blurb: "Soft cotton tees with lake-house humor — made for dock days and cannonballs.",
  },
  mugs: {
    title: "Mugs",
    blurb: "Ceramic mugs for campfire coffee, Father’s Day, and every morning that starts on the porch.",
  },
  hats: {
    title: "Hats",
    blurb: "Mesh-back lids with rope detail and our heron patch — golf course to gas dock.",
  },
};

export const PRODUCTS: Product[] = [
  {
    id: "tee-warm-spot",
    slug: "never-trust-a-warm-spot",
    category: "t-shirts",
    name: "Never Trust a Warm Spot",
    priceCents: 2800,
    summary: "Lake cartoon tee — “Dude, check out this warm spot!”",
    description:
      "Premium cotton crewneck with our original comic strip: two kids in the lake, one unforgettable punchline. Soft hand, durable print — wear it from the swim dock to the pizza place.",
    image: tshirtWarmSpot,
    gallery: [tshirtWarmSpot, tshirtHero],
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: "tee-bird-legs",
    slug: "bird-legs",
    category: "t-shirts",
    name: "Bird Legs",
    priceCents: 2800,
    summary: "Bird Legs Yacht Club — heron in shades on a seafoam tee.",
    description:
      "Seafoam crewneck with our navy “Bird Legs Yacht Club” back print: arched type, sunglasses-on-a-heron attitude, and script yacht-club finish. Soft cotton, lake-break certified — from the dock to the beach.",
    image: tshirtBirdLegsBack,
    gallery: [tshirtBirdLegsBack, tshirtBirdLegsLifestyle],
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: "tee-trashy-gulls",
    slug: "dont-be-trashy-gulls",
    category: "t-shirts",
    name: "Don't Be Trashy, Gulls",
    priceCents: 2800,
    summary: "Sage crewneck — beach trash, three gulls with attitude, Lake Break sleeve hit.",
    description:
      "Soft sage-mint cotton tee with our full-back illustration: “Don’t be trashy, gulls.” around a very busy trash can, heart-shaped shades, pearls, and gull drama. Small Lake Break mark on the sleeve. Pack out what you pack in — just do it in style.",
    image: tshirtTrashyGulls,
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: "hat-sunset-pink",
    slug: "sunset-pink",
    category: "hats",
    name: "Sunset Pink",
    priceCents: 3200,
    summary: "Soft sunset pink front & brim — tan mesh, aqua rope, hex Lake Break patch.",
    description:
      "Sunset Pink trucker: pink structured crown and brim, tan mesh back, light braided rope at the brim. Hexagonal Lake Break patch with heron, L · B, and snap closure — front & back detail views.",
    image: hatSunsetPink,
  },
  {
    id: "hat-lake-day-classic",
    slug: "lake-day-classic",
    category: "hats",
    name: "Lake Day Classic",
    priceCents: 3200,
    summary: "White & tan classic — navy rope, hex patch, LB embroidery.",
    description:
      "Lake Day Classic trucker: crisp white front and brim, tan mesh, navy braided rope. Hex patch heron mark, side woven tag, snapback with LB embroidery — your everyday lake-break lid.",
    image: hatLakeDayClassic,
  },
  {
    id: "hat-floral-escape",
    slug: "floral-escape",
    category: "hats",
    name: "Floral Escape",
    priceCents: 3200,
    summary: "White & tan with pink rope — floral hex patch and pink LB stitch.",
    description:
      "Floral Escape trucker: white crown and brim, tan mesh, pink rope accent. Hex patch with pink-yellow floral field, heron silhouette, Lake Break type — playful escape energy.",
    image: hatFloralEscape,
  },
  {
    id: "hat-coastal-mint",
    slug: "coastal-mint",
    category: "hats",
    name: "Coastal Mint",
    priceCents: 3200,
    summary: "Mint green crown & brim — pink rope, beige mesh, mint LB embroidery.",
    description:
      "Coastal Mint trucker: mint foam front and brim, beige mesh back, bold pink braided rope. Hex Lake Break patch on white; mint LB hit on the mesh — coastal tee-time vibes.",
    image: hatCoastalMint,
  },
  {
    id: "mug-bear-spot",
    slug: "i-see-a-bear-spot",
    category: "mugs",
    name: "I See a Bear Spot",
    priceCents: 2400,
    summary: "Lake Break ceramic mug — camping humor with heart.",
    description:
      "Dark green ceramic mug with vintage outdoor illustration and our signature pun. Microwave-safe print · Dad-joke certified · Perfect for Father’s Day or your own campfire cocoa ritual.",
    image: mugDetail,
    gallery: [mugDetail, mugLifestyle],
  },
];

export function getCategoryFromParam(param: string | undefined): ShopCategoryId | null {
  if (param === "t-shirts" || param === "mugs" || param === "hats") return param;
  return null;
}

export function getProductsByCategory(category: ShopCategoryId): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProduct(category: ShopCategoryId, slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.category === category && p.slug === slug);
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);
}
