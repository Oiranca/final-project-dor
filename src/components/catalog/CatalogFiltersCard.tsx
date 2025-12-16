import Button from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import type { CatalogFiltersCardProps } from "../../types/catalog";

const CatalogFiltersCard = ({ filters, formatCurrency, onReset }: CatalogFiltersCardProps) => {
  const {
    categories,
    category,
    setCategory,
    maxPrice,
    priceCap,
    setPriceCap,
    priceOptions,
    searchTerm,
    setSearchTerm,
    allCategoryValue,
  } = filters;
  const limitedOptions = priceOptions.filter((value, index, list) => list.indexOf(value) === index);
  const secondaryOptions = limitedOptions.filter((value) => value < maxPrice);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filter products</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-3">
        <label className="space-y-1 text-sm">
          <span>Search</span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Suite, spa, brunch..."
            className="w-full rounded-lg border border-white/10 bg-slate-800/80 px-3 py-2 text-slate-100 placeholder:text-slate-500"
          />
        </label>

        <label className="space-y-1 text-sm">
          <span>Category</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-lg border border-white/10 bg-slate-800/80 px-3 py-2 text-slate-100"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === allCategoryValue ? "All" : cat}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1 text-sm">
          <span>Max price</span>
          <select
            value={String(priceCap)}
            onChange={(event) => setPriceCap(Number(event.target.value))}
            className="w-full rounded-lg border border-white/10 bg-slate-800/80 px-3 py-2 text-slate-100"
          >
            <option value={String(maxPrice)}>Any price</option>
            {secondaryOptions.map((option) => (
              <option key={option} value={String(option)}>
                Up to {formatCurrency(option)}
              </option>
            ))}
          </select>
        </label>
      </CardContent>
      <CardContent className="flex justify-end">
        <Button variant="ghost" onClick={onReset}>
          Reset filters
        </Button>
      </CardContent>
    </Card>
  );
};

export default CatalogFiltersCard;
