import tshirtHero from "@/assets/category-clothing.jpg";
import tshirtWarmSpot from "@/assets/tshirt-warm-spot.png";
import tshirtBirdLegsLifestyle from "@/assets/tshirt-bird-legs-lifestyle.png";
import tshirtBirdLegsBack from "@/assets/tshirt-bird-legs-back.png";
import tshirtTrashyGulls from "@/assets/tshirt-dont-be-trashy-gulls.png";
import mugDetail from "@/assets/mug-fathers-day-product.png";
import mugLifestyle from "@/assets/mug-fathers-day-lifestyle.png";

export type ShopCategoryId = "t-shirts" | "mugs";

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
  /** T-shirt sizes; omit for mugs */
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
  if (param === "t-shirts" || param === "mugs") return param;
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
