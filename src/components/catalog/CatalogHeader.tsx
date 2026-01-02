import SortBar from "../ui/SortBar";
import type { SortBy, SortDir } from "../../types/index.ts";
import type { Dispatch, SetStateAction } from "react";

type CatalogHeaderProps = {
  title?: string;
  sortBy: SortBy;
  sortDir: SortDir;
  setSortBy: Dispatch<SetStateAction<SortBy>>;
  setSortDir: Dispatch<SetStateAction<SortDir>>;
};

const CatalogHeader = ({
  title = "Hotel — Catálogo",
  sortBy,
  sortDir,
  setSortBy,
  setSortDir,
}: CatalogHeaderProps) => (
  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>
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
