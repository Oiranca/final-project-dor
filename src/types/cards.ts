import type { Product } from "./product.ts";

export type CardsProps = {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onBuyNow?: (product: Product) => void;
};
