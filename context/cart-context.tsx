"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import type { CartItem } from "@/types";

const STORAGE_KEY = "maison-lune-cart";

type Action =
  | { type: "hydrate"; items: CartItem[] }
  | { type: "add"; item: CartItem }
  | { type: "setQuantity"; key: string; quantity: number }
  | { type: "remove"; key: string }
  | { type: "clear" };

export const cartItemKey = (i: Pick<CartItem, "productId" | "size" | "color">) =>
  `${i.productId}|${i.size}|${i.color}`;

function reducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case "hydrate":
      return action.items;
    case "add": {
      const key = cartItemKey(action.item);
      const exists = state.some((i) => cartItemKey(i) === key);
      if (!exists) return [...state, action.item];
      return state.map((i) =>
        cartItemKey(i) === key
          ? { ...i, quantity: i.quantity + action.item.quantity }
          : i,
      );
    }
    case "setQuantity":
      return state
        .map((i) =>
          cartItemKey(i) === action.key ? { ...i, quantity: action.quantity } : i,
        )
        .filter((i) => i.quantity > 0);
    case "remove":
      return state.filter((i) => cartItemKey(i) !== action.key);
    case "clear":
      return [];
  }
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  /** False until localStorage has been read; avoids hydration mismatches. */
  ready: boolean;
  addItem: (item: CartItem) => void;
  setQuantity: (key: string, quantity: number) => void;
  removeItem: (key: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

function isCartItems(value: unknown): value is CartItem[] {
  return (
    Array.isArray(value) &&
    value.every(
      (i) =>
        i &&
        typeof i.productId === "string" &&
        typeof i.price === "number" &&
        typeof i.quantity === "number",
    )
  );
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(reducer, []);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed: unknown = raw ? JSON.parse(raw) : [];
      if (isCartItems(parsed)) dispatch({ type: "hydrate", items: parsed });
    } catch {
      // Corrupt storage: start with an empty cart.
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time load from localStorage
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      ready,
      itemCount: items.reduce((n, i) => n + i.quantity, 0),
      subtotal: items.reduce((n, i) => n + i.price * i.quantity, 0),
      addItem: (item) => dispatch({ type: "add", item }),
      setQuantity: (key, quantity) =>
        dispatch({ type: "setQuantity", key, quantity }),
      removeItem: (key) => dispatch({ type: "remove", key }),
      clear: () => dispatch({ type: "clear" }),
    }),
    [items, ready],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
