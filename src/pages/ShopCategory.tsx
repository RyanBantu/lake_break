import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import StoreLayout from "@/components/layout/StoreLayout";
import { CATEGORY_LABELS, formatPrice, getCategoryFromParam, getProductsByCategory } from "@/data/products";
import { Separator } from "@/components/ui/separator";

const ShopCategory = () => {
  const { category: categoryParam } = useParams<{ category: string }>();
  const category = getCategoryFromParam(categoryParam);

  if (!category) {
    return <Navigate to="/" replace />;
  }

  const meta = CATEGORY_LABELS[category];
  const products = getProductsByCategory(category);

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
            <li className="text-foreground font-medium">{meta.title}</li>
          </ol>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-10 md:mb-14"
        >
          <p className="type-caps-label mb-3">Lake Break shop</p>
          <h1 className="font-billboard text-4xl sm:text-5xl md:text-6xl text-foreground uppercase tracking-wide leading-none">
            {meta.title}
          </h1>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl text-base md:text-lg leading-relaxed">
            {meta.blurb}
          </p>
        </motion.div>

        <Separator className="mb-10 bg-primary/15" />

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {products.map((product, i) => (
            <motion.li
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                to={`/shop/${category}/${product.slug}`}
                className="group block rounded-2xl border border-primary/20 bg-card overflow-hidden beachy-shell transition-colors hover:border-primary/45"
              >
                <div className="relative aspect-[4/5] bg-muted overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <p className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-2">
                      {formatPrice(product.priceCents)}
                    </p>
                    <h2 className="font-display text-2xl md:text-3xl text-white leading-tight group-hover:text-primary transition-colors">
                      {product.name}
                    </h2>
                  </div>
                </div>
                <div className="p-6 md:p-8 pt-5">
                  <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {product.summary}
                  </p>
                  <span className="inline-flex mt-5 font-body text-[11px] font-bold tracking-[0.2em] uppercase text-primary group-hover:underline underline-offset-4">
                    View product
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </StoreLayout>
  );
};

export default ShopCategory;
