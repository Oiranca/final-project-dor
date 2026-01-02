import Cards from "../ui/Cards";
import type { Product } from "../../types/index.ts";

type CatalogProductGridProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
};

const CatalogProductGrid = ({ products, onAddToCart, onBuyNow }: CatalogProductGridProps) => (
  <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {products.map((product) => (
      <Cards
        key={product.id}
        product={product}
        onAddToCart={onAddToCart}
        onBuyNow={onBuyNow}
      />
    ))}
  </section>
);

export default CatalogProductGrid;
