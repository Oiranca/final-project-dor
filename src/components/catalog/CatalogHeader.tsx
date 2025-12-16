import SortBar from "../ui/SortBar";
import type { CatalogHeaderProps } from "../../types/catalog.types";

const CatalogHeader = ({
  title = "Hotel — Catalog",
  sortBy,
  sortDir,
  setSortBy,
  setSortDir,
}: CatalogHeaderProps) => (
  <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
    <h1 className="text-2xl font-bold">{title}</h1>
    <SortBar
      sortBy={sortBy}
      sortDir={sortDir}
      onChange={({ sortBy: nextSortBy, sortDir: nextSortDir }) => {
        setSortBy(nextSortBy);
        setSortDir(nextSortDir);
      }}
    />
  </div>
);

export default CatalogHeader;
