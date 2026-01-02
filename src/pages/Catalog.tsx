import CatalogHeader from "../components/catalog/CatalogHeader";
import CatalogFiltersCard from "../components/catalog/CatalogFiltersCard";
import CatalogSummaryCard from "../components/catalog/CatalogSummaryCard";
import CatalogProductGrid from "../components/catalog/CatalogProductGrid";
import { useCart } from "../hooks/useCart";
import { useCurrencyFormatter } from "../hooks/useCurrencyFormatter";
import type { Product, SortBy, SortDir, CatalogFiltersState } from "../types/index.ts";
import type { Dispatch, SetStateAction } from "react";

type CatalogPageProps = {
  products: Product[];
  sortBy: SortBy;
  sortDir: SortDir;
  setSortBy: Dispatch<SetStateAction<SortBy>>;
  setSortDir: Dispatch<SetStateAction<SortDir>>;
  cartTotal: string;
  filters: CatalogFiltersState;
};

const CatalogPage = ({
  products,
  sortBy,
  sortDir,
  setSortBy,
  setSortDir,
  cartTotal,
  filters,
}: CatalogPageProps) => {
  const { addItemToCart, count } = useCart();
  const formatCurrency = useCurrencyFormatter();
  const { allCategoryValue, setCategory, setPriceCap, setSearchTerm, maxPrice } = filters;

  const resetFilters = () => {
    setCategory(allCategoryValue);
    setPriceCap(maxPrice);
    setSearchTerm("");
  };

  const handleBuyNow = (selectedProduct: Product) => {
    addItemToCart(selectedProduct);
    location.assign("/cart");
  };

  return (
    <section id="catalog" className="space-y-6">
      <CatalogHeader
        sortBy={sortBy}
        sortDir={sortDir}
        setSortBy={setSortBy}
        setSortDir={setSortDir}
      />

      <CatalogFiltersCard filters={filters} formatCurrency={formatCurrency} onReset={resetFilters} />

      <CatalogSummaryCard
        cartCount={count}
        cartTotal={cartTotal}
        searchTerm={filters.searchTerm}
        visibleProducts={filters.visibleProducts}
        totalProducts={filters.totalProducts}
      />

      <CatalogProductGrid
        products={products}
        onAddToCart={addItemToCart}
        onBuyNow={handleBuyNow}
      />
    </section>
  );
};

export default CatalogPage;
