import Cards from "../ui/Cards";
import type { CatalogGridProps } from "../../types/catalog.types";

const CatalogProductGrid = ({ products, onAddToCart, onBuyNow }: CatalogGridProps) => (
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
