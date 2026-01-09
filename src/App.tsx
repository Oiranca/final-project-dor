import { useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CatalogPage from "./pages/Catalog";
import RoomsPage from "./pages/Rooms";
import SpaPage from "./pages/Spa";
import ContactPage from "./pages/Contact";
import CartPage from "./pages/Cart";
import type { Product, SortBy, SortDir, ViewMode } from "./types/index.ts";
import { useCart } from "./hooks/useCart";
import { useCurrencyFormatter } from "./hooks/useCurrencyFormatter";
import { HOTEL_PRODUCTS } from "./data/products";

const App = () => {
  const formatCurrency = useCurrencyFormatter();
  const [products] = useState<Product[]>(HOTEL_PRODUCTS);

  const MAX_INITIAL_PRICE = useMemo(() => {
    if (products.length === 0) return 0;
    return products.reduce((max, product) => Math.max(max, product.price), products[0].price);
  }, [products]);
  const [priceCap, setPriceCap] = useState<number>(MAX_INITIAL_PRICE);
  const ALL_CATEGORY_VALUE = "all";
  const [category, setCategory] = useState<string>(ALL_CATEGORY_VALUE);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const priceOptions = useMemo(() => {
    const defaultSteps = [50, 100, 150, 200, 250, 300, 400, 500, 750, 1000, 1500, 2000];
    const stepsBelowMax = defaultSteps.filter((value) => value < MAX_INITIAL_PRICE);
    if (stepsBelowMax.length === 0) return [MAX_INITIAL_PRICE];
    return [...stepsBelowMax, MAX_INITIAL_PRICE];
  }, [MAX_INITIAL_PRICE]);

  useEffect(() => {
    setPriceCap((previousCap) => (previousCap > MAX_INITIAL_PRICE ? MAX_INITIAL_PRICE : previousCap));
  }, [MAX_INITIAL_PRICE]);

  const categories = useMemo(() => {
    const uniqueTags = new Set<string>();
    products.forEach((product) => {
      if (product.tag) uniqueTags.add(product.tag);
    });
    return [ALL_CATEGORY_VALUE, ...Array.from(uniqueTags)];
  }, [products]);

  const [sortBy, setSortBy] = useState<SortBy>("price");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const sortedProducts = useMemo(() => {
    const sortedCatalog = [...products];
    sortedCatalog.sort((a, b) => {
      if (sortBy === "price") {
        if (a.price < b.price) return sortDir === "asc" ? -1 : 1;
        if (a.price > b.price) return sortDir === "asc" ? 1 : -1;
        return 0;
      }

      const firstText = (sortBy === "name" ? a.name : a.tag ?? "").toLowerCase();
      const secondText = (sortBy === "name" ? b.name : b.tag ?? "").toLowerCase();
      if (firstText < secondText) return sortDir === "asc" ? -1 : 1;
      if (firstText > secondText) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
    return sortedCatalog;
  }, [products, sortBy, sortDir]);

  const visibleProducts = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
    return sortedProducts.filter((product) => {
      if (product.price > priceCap) return false;
      if (category !== ALL_CATEGORY_VALUE && product.tag !== category) return false;
      if (!normalizedSearchTerm) return true;
      return (
        product.name.toLowerCase().includes(normalizedSearchTerm) ||
        product.description.toLowerCase().includes(normalizedSearchTerm)
      );
    });
  }, [sortedProducts, priceCap, category, searchTerm]);

  const { total } = useCart();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Header />

      <main className="mx-auto max-w-6xl p-4 sm:p-6">
        <Routes>
          <Route
            path="/catalog"
            element={
              <CatalogPage
                products={visibleProducts}
                sortBy={sortBy}
                sortDir={sortDir}
                viewMode={viewMode}
                setSortBy={setSortBy}
                setSortDir={setSortDir}
                setViewMode={setViewMode}
                cartTotal={formatCurrency(total)}
                filters={{
                  categories,
                  category,
                  setCategory,
                  maxPrice: MAX_INITIAL_PRICE,
                  priceCap,
                  setPriceCap,
                  priceOptions,
                  searchTerm,
                  setSearchTerm,
                  totalProducts: sortedProducts.length,
                  visibleProducts: visibleProducts.length,
                  allCategoryValue: ALL_CATEGORY_VALUE,
                  viewMode,
                  setViewMode,
                }}
              />
            }
          />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/spa" element={<SpaPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage formatCurrency={formatCurrency} />} />
          <Route path="/" element={<Navigate to="/catalog" replace />} />
          <Route path="*" element={<Navigate to="/catalog" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
