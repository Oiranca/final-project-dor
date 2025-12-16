import { useCallback, useEffect, useMemo, useState } from "react";
import { CartContext } from "./cartContextInstance.ts";
import type { Product, CartItem, CartContextValue } from "../types/types.ts";
import type { CartProviderProps } from "./cartProvider.types.ts";

export type { Product, CartItem, CartContextValue };

export const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = JSON.parse(localStorage.getItem("cart:v1") || "[]");
      if (!Array.isArray(raw)) return [];
      return raw
        .filter((entry) => entry && typeof entry.product === "object")
        .map((entry) => ({
          product: entry.product,
          quantity: typeof entry.quantity === "number"
            ? entry.quantity
            : Math.max(1, Number(entry.qty) || 1),
        }));
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart:v1", JSON.stringify(items));
    const cartEntriesCount = items.reduce((sum, cartEntry) => sum + cartEntry.quantity, 0);
    document.title = cartEntriesCount ? `(${cartEntriesCount}) Hotel` : "Hotel";
  }, [items]);

  const addItemToCart = useCallback((product: Product) => {
    setItems((previousItems) => {
      const existingIndex = previousItems.findIndex((entry) => entry.product.id === product.id);
      if (existingIndex >= 0) {
        const updatedItems = [...previousItems];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: updatedItems[existingIndex].quantity + 1,
        };
        return updatedItems;
      }
      return [...previousItems, { product, quantity: 1 }];
    });
  }, [setItems]);

  const incrementItemQuantity = useCallback((id: string) => {
    setItems((previousItems) =>
      previousItems.map((item) =>
        item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, [setItems]);

  const decrementItemQuantity = useCallback((id: string) => {
    setItems((previousItems) =>
      previousItems
        .map((item) =>
          item.product.id === id
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, [setItems]);

  const removeItemFromCart = useCallback((id: string) => {
    setItems((previousItems) => previousItems.filter((item) => item.product.id !== id));
  }, [setItems]);

  const clearCartItems = useCallback(() => {
    setItems([]);
  }, [setItems]);

  const count = useMemo(() => items.reduce((sum, cartEntry) => sum + cartEntry.quantity, 0), [items]);
  const total = useMemo(
    () => items.reduce((sum, cartEntry) => sum + cartEntry.product.price * cartEntry.quantity, 0),
    [items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      addItemToCart,
      incrementItemQuantity,
      decrementItemQuantity,
      removeItemFromCart,
      clearCartItems,
      count,
      total,
    }),
    [items, addItemToCart, incrementItemQuantity, decrementItemQuantity, removeItemFromCart, clearCartItems, count, total]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
