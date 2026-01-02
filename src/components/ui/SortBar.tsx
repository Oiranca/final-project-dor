import type { SortBy, SortDir, SortChange } from "../../types/index.ts";

type SortBarProps = {
  sortBy: SortBy;
  sortDir: SortDir;
  onChange: (value: SortChange) => void;
};

const SortBar = ({ sortBy, sortDir, onChange }: SortBarProps) => {
  return (
    <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-end">
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
  );
};

export default SortBar;
