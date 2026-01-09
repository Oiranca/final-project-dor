import Cards from "../ui/Cards";
import CatalogProductList from "./CatalogProductList";
import type { Product, ViewMode } from "../../types/index.ts";

type CatalogProductGridProps = {
  products: Product[];
  viewMode: ViewMode;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
};

const CatalogProductGrid = ({ products, viewMode, onAddToCart, onBuyNow }: CatalogProductGridProps) => {
  if (viewMode === "list") {
    return <CatalogProductList products={products} onAddToCart={onAddToCart} onBuyNow={onBuyNow} />;
  }

  return (
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
};

export default CatalogProductGrid;
