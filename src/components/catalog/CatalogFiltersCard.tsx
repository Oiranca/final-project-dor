import Button from "../ui/Button";
import type { CatalogFiltersState } from "../../types/index.ts";

type CatalogFiltersCardProps = {
  filters: CatalogFiltersState;
  formatCurrency: (value: number) => string;
  onReset: () => void;
};

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
    <div className="rounded-2xl border border-slate-200/20 bg-white/10 p-6 shadow backdrop-blur">
      <div className="mb-3">
        <h2 className="text-xl font-semibold leading-none">Filtrar productos</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <label className="space-y-1 text-sm">
          <span>Buscar</span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Suite, spa, brunch..."
            className="w-full rounded-lg border border-white/10 bg-slate-800/80 px-3 py-2 text-slate-100 placeholder:text-slate-500"
          />
        </label>

        <label className="space-y-1 text-sm">
          <span>Categoría</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-lg border border-white/10 bg-slate-800/80 px-3 py-2 text-slate-100"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === allCategoryValue ? "Todas" : cat}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1 text-sm">
          <span>Precio máximo</span>
          <select
            value={String(priceCap)}
            onChange={(event) => setPriceCap(Number(event.target.value))}
            className="w-full rounded-lg border border-white/10 bg-slate-800/80 px-3 py-2 text-slate-100"
          >
            <option value={String(maxPrice)}>Cualquier precio</option>
            {secondaryOptions.map((option) => (
              <option key={option} value={String(option)}>
                Hasta {formatCurrency(option)}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="flex justify-end mt-4">
        <Button variant="ghost" onClick={onReset} className="w-full sm:w-auto">
          Restablecer filtros
        </Button>
      </div>
    </div>
  );
};

export default CatalogFiltersCard;
