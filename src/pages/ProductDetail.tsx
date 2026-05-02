import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import StoreLayout from "@/components/layout/StoreLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  CATEGORY_LABELS,
  formatPrice,
  getCategoryFromParam,
  getProduct,
  type ShopCategoryId,
} from "@/data/products";

const ProductDetail = () => {
  const { category: categoryParam, slug } = useParams<{ category: string; slug: string }>();
  const category = getCategoryFromParam(categoryParam) as ShopCategoryId | null;

  const product = useMemo(() => {
    if (!category || !slug) return undefined;
    return getProduct(category, slug);
  }, [category, slug]);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState<string>("");

  if (!category || !slug || !product) {
    return <Navigate to="/" replace />;
  }

  const meta = CATEGORY_LABELS[category];
  const images = product.gallery?.length ? product.gallery : [product.image];
  const [activeImg, setActiveImg] = useState(0);
  const needsSize = Boolean(product.sizes?.length);

  const bumpQty = (delta: number) => {
    setQty((q) => Math.min(99, Math.max(1, q + delta)));
  };

  const handleOrder = () => {
    if (needsSize && !size) {
      toast.error("Please select a size.");
      return;
    }
    toast.success("Added to your order summary", {
      description: `${product.name} × ${qty}${size ? ` · Size ${size}` : ""} · ${formatPrice(product.priceCents * qty)}`,
    });
  };

  return (
    <StoreLayout>
      <div className="container mx-auto px-4 py-10 md:py-14 max-w-6xl">
        <nav className="font-body text-xs text-muted-foreground mb-8 md:mb-10">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden />
            <li>
              <Link to={`/shop/${category}`} className="hover:text-primary transition-colors">
                {meta.title}
              </Link>
            </li>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden />
            <li className="text-foreground font-medium line-clamp-1">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 lg:sticky lg:top-[calc(var(--header-h,8.75rem)+1.5rem)]"
          >
            <div className="relative aspect-square rounded-2xl border border-primary/20 bg-muted overflow-hidden beachy-shell">
              <img
                src={images[activeImg]}
                alt={product.name}
                className="h-full w-full object-contain object-center bg-[hsl(220_10%_12%)] p-4 md:p-8"
              />
            </div>
            {images.length > 1 && (
              <div className="flex gap-3 justify-center sm:justify-start">
                {images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveImg(i)}
                    className={`relative h-16 w-16 sm:h-20 sm:w-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      activeImg === i ? "border-primary ring-2 ring-primary/25" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
            <p className="font-body text-[11px] font-bold tracking-[0.22em] uppercase text-primary mb-3">
              Lake Break · {product.id}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] text-foreground leading-[1.1]">
              {product.name}
            </h1>
            <p className="font-body text-2xl md:text-3xl font-semibold text-primary mt-4 tabular-nums">
              {formatPrice(product.priceCents)}
            </p>

            <Separator className="my-8 bg-primary/15" />

            <p className="font-body text-muted-foreground leading-relaxed text-base">{product.description}</p>

            <div className="mt-10 space-y-8 rounded-2xl border border-primary/20 bg-card/80 p-6 md:p-8">
              {needsSize && (
                <div className="space-y-3">
                  <Label htmlFor="size" className="font-body text-xs font-bold uppercase tracking-[0.18em] text-foreground">
                    Size
                  </Label>
                  <Select value={size} onValueChange={setSize}>
                    <SelectTrigger id="size" className="h-12 rounded-lg border-primary/25 bg-background font-body">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizes!.map((s) => (
                        <SelectItem key={s} value={s} className="font-body">
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-3">
                <Label className="font-body text-xs font-bold uppercase tracking-[0.18em] text-foreground">Quantity</Label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center rounded-lg border border-primary/25 bg-background">
                    <button
                      type="button"
                      className="flex h-12 w-12 items-center justify-center text-foreground hover:bg-white/5 rounded-l-lg transition-colors disabled:opacity-40"
                      aria-label="Decrease quantity"
                      onClick={() => bumpQty(-1)}
                      disabled={qty <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-[3rem] text-center font-body text-lg font-semibold tabular-nums">{qty}</span>
                    <button
                      type="button"
                      className="flex h-12 w-12 items-center justify-center text-foreground hover:bg-white/5 rounded-r-lg transition-colors disabled:opacity-40"
                      aria-label="Increase quantity"
                      onClick={() => bumpQty(1)}
                      disabled={qty >= 99}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    Subtotal{" "}
                    <span className="text-foreground font-semibold tabular-nums">
                      {formatPrice(product.priceCents * qty)}
                    </span>
                  </div>
                </div>
              </div>

              <Button type="button" variant="lake" size="lg" className="w-full h-12 rounded-lg text-[11px]" onClick={handleOrder}>
                Add to order
              </Button>
              <p className="font-body text-xs text-muted-foreground text-center leading-relaxed">
                Checkout opens soon — adding to order saves your selection for when cart goes live.
              </p>
            </div>

            <Link
              to={`/shop/${category}`}
              className="inline-flex mt-8 font-body text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              ← Back to {meta.title}
            </Link>
          </motion.div>
        </div>
      </div>
    </StoreLayout>
  );
};

export default ProductDetail;
