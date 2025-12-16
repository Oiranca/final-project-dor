import type { SortBy, SortDir } from "../../types/catalog.ts";
import type { SortBarProps } from "../../types/sortBar.ts";

const SortBar = ({ sortBy, sortDir, onChange }: SortBarProps) => {
  return (
    <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-end">
      <div className="flex items-center gap-2">
        <label className="whitespace-nowrap text-slate-300">Sort by:</label>
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
          <option value="price">Price</option>
          <option value="name">Name</option>
          <option value="tag">Category</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label className="whitespace-nowrap text-slate-300">Direction:</label>
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
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default SortBar;
