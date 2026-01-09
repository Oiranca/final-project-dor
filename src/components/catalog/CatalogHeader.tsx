import SortBar from "../ui/SortBar";
import type { SortBy, SortDir, ViewMode } from "../../types/index.ts";
import type { Dispatch, SetStateAction } from "react";

type CatalogHeaderProps = {
  title?: string;
  sortBy: SortBy;
  sortDir: SortDir;
  viewMode: ViewMode;
  setSortBy: Dispatch<SetStateAction<SortBy>>;
  setSortDir: Dispatch<SetStateAction<SortDir>>;
  setViewMode: Dispatch<SetStateAction<ViewMode>>;
};

const CatalogHeader = ({
  title = "Hotel — Catálogo",
  sortBy,
  sortDir,
  viewMode,
  setSortBy,
  setSortDir,
  setViewMode,
}: CatalogHeaderProps) => (
  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>
    <SortBar
      sortBy={sortBy}
      sortDir={sortDir}
      viewMode={viewMode}
      onChange={({ sortBy: nextSortBy, sortDir: nextSortDir, viewMode: nextViewMode }) => {
        setSortBy(nextSortBy);
        setSortDir(nextSortDir);
        if (nextViewMode) {
          setViewMode(nextViewMode);
        }
      }}
    />
  </div>
);

export default CatalogHeader;
