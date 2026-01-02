import type { Dispatch, SetStateAction, ButtonHTMLAttributes, ReactNode, HTMLAttributes } from "react";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  tag?: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type SortBy = "price" | "name" | "tag";
export type SortDir = "asc" | "desc";

export type SortChange = {
  sortBy: SortBy;
  sortDir: SortDir;
};

export type CatalogFiltersState = {
  categories: string[];
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  maxPrice: number;
  priceCap: number;
  setPriceCap: Dispatch<SetStateAction<number>>;
  priceOptions: number[];
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  totalProducts: number;
  visibleProducts: number;
  allCategoryValue: string;
};

export type ButtonVariant = "primary" | "outline" | "ghost" | "buy";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leadingIcon?: ReactNode;
};

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export type NavLinkClassArgs = {
  isActive: boolean;
};

export type CartContextValue = {
  items: CartItem[];
  addItemToCart: (product: Product) => void;
  incrementItemQuantity: (id: string) => void;
  decrementItemQuantity: (id: string) => void;
  removeItemFromCart: (id: string) => void;
  clearCartItems: () => void;
  count: number;
  total: number;
};

