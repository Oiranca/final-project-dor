import type { SortBy, SortDir } from "./catalog.ts";

export type SortChange = {
  sortBy: SortBy;
  sortDir: SortDir;
};

export type SortBarProps = {
  sortBy: SortBy;
  sortDir: SortDir;
  onChange: (value: SortChange) => void;
};
