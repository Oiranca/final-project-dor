import type { Dispatch, SetStateAction } from "react";
import type { Product } from "./product.ts";

export type SortBy = "price" | "name" | "tag";
export type SortDir = "asc" | "desc";

export type CatalogFiltersState = {
  categories: string[];
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  maxPrice: number;
  priceCap: number;
  setPriceCap: Dispatch<SetStateAction<number>>;
  priceOptions: number[];
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  totalProducts: number;
  visibleProducts: number;
  allCategoryValue: string;
};

export type CatalogPageProps = {
  products: Product[];
  sortBy: SortBy;
  sortDir: SortDir;
  setSortBy: Dispatch<SetStateAction<SortBy>>;
  setSortDir: Dispatch<SetStateAction<SortDir>>;
  cartTotal: string;
  filters: CatalogFiltersState;
};

export type CatalogHeaderProps = {
  title?: string;
  sortBy: SortBy;
  sortDir: SortDir;
  setSortBy: Dispatch<SetStateAction<SortBy>>;
  setSortDir: Dispatch<SetStateAction<SortDir>>;
};

export type CatalogFiltersCardProps = {
  filters: CatalogFiltersState;
  formatCurrency: (value: number) => string;
  onReset: () => void;
};

export type CatalogSummaryCardProps = {
  cartCount: number;
  cartTotal: string;
  searchTerm: string;
  visibleProducts: number;
  totalProducts: number;
};

export type CatalogGridProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
};
