import tshirtHero from "@/assets/category-clothing.jpg";
import tshirtWarmSpot from "@/assets/tshirt-warm-spot.png";
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
