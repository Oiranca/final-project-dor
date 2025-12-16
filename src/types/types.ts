import type { Product } from "./product.ts";

export type { Product };

export type CartItem = {
  product: Product;
  quantity: number;
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
