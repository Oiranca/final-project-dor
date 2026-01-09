import CatalogHeader from "../components/catalog/CatalogHeader";
import CatalogFiltersCard from "../components/catalog/CatalogFiltersCard";
import CatalogSummaryCard from "../components/catalog/CatalogSummaryCard";
import CatalogProductGrid from "../components/catalog/CatalogProductGrid";
import { useCart } from "../hooks/useCart";
import { useCurrencyFormatter } from "../hooks/useCurrencyFormatter";
import type { Product, SortBy, SortDir, ViewMode, CatalogFiltersState } from "../types/index.ts";
import type { Dispatch, SetStateAction } from "react";

type CatalogPageProps = {
  products: Product[];
  sortBy: SortBy;
  sortDir: SortDir;
  viewMode: ViewMode;
  setSortBy: Dispatch<SetStateAction<SortBy>>;
  setSortDir: Dispatch<SetStateAction<SortDir>>;
  setViewMode: Dispatch<SetStateAction<ViewMode>>;
  cartTotal: string;
  filters: CatalogFiltersState;
};

const CatalogPage = ({
  products,
  sortBy,
  sortDir,
  viewMode,
  setSortBy,
  setSortDir,
  setViewMode,
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
        viewMode={viewMode}
        setSortBy={setSortBy}
        setSortDir={setSortDir}
        setViewMode={setViewMode}
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
        viewMode={viewMode}
        onAddToCart={addItemToCart}
        onBuyNow={handleBuyNow}
      />
    </section>
  );
};

export default CatalogPage;
