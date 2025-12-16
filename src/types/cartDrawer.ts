import type { CartItem } from "./types.ts";

export type CartDrawerProps = {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onIncrementItem: (id: string) => void;
  onDecrementItem: (id: string) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
};
