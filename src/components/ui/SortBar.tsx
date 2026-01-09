import type { SortBy, SortDir, SortChange, ViewMode } from "../../types/index.ts";

type SortBarProps = {
  sortBy: SortBy;
  sortDir: SortDir;
  viewMode: ViewMode;
  onChange: (value: SortChange) => void;
};

const SortBar = ({ sortBy, sortDir, viewMode, onChange }: SortBarProps) => {
  return (
    <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="hidden sm:flex items-center gap-2">
        <button
          onClick={() =>
            onChange({
              sortBy,
              sortDir,
              viewMode: "grid",
            })
          }
          className={`px-3 py-1 rounded-md border transition-colors ${
            viewMode === "grid"
              ? "border-emerald-500 bg-emerald-500/20 text-emerald-300"
              : "border-white/10 bg-slate-800/80 text-slate-400 hover:text-slate-300"
          }`}
          title="Vista en grilla"
        >
          <span className="text-lg">⊞</span>
        </button>
        <button
          onClick={() =>
            onChange({
              sortBy,
              sortDir,
              viewMode: "list",
            })
          }
          className={`px-3 py-1 rounded-md border transition-colors ${
            viewMode === "list"
              ? "border-emerald-500 bg-emerald-500/20 text-emerald-300"
              : "border-white/10 bg-slate-800/80 text-slate-400 hover:text-slate-300"
          }`}
          title="Vista en lista"
        >
          <span className="text-lg">≡</span>
        </button>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <label className="whitespace-nowrap text-slate-300">Ordenar por:</label>
          <select
            value={sortBy}
            onChange={(e) =>
              onChange({
                sortBy: e.target.value as SortBy,
                sortDir,
              })
            }
            className="rounded-md border border-white/10 bg-slate-800/80 px-2 py-1 text-slate-100"
          >
            <option value="price">Precio</option>
            <option value="name">Nombre</option>
            <option value="tag">Categoría</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label className="whitespace-nowrap text-slate-300">Dirección:</label>
          <select
            value={sortDir}
            onChange={(e) =>
              onChange({
                sortBy,
                sortDir: e.target.value as SortDir,
              })
            }
            className="rounded-md border border-white/10 bg-slate-800/80 px-2 py-1 text-slate-100"
          >
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortBar;
