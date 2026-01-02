import { createContext } from "react";
import type { CartContextValue } from "../types/index.ts";

export const CartContext = createContext<CartContextValue | null>(null);
