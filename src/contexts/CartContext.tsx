"use client";

import React, {
  useState,
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";

import { cartReducer, CartState, CartItem } from "@/reducers/cartReducer";
import { ADD_ITEM, REMOVE_ITEM } from "@/utils/constants";
import useLocalStorage from "@/hooks/useLocalStorage";

export interface CartContextType {
  addItemToCart: (item: CartItem) => void;
  cartItems: CartItem[];
  hasItems: boolean;
  removeItemFromCart: (id: string) => void;
  total: number;
  isItemInCart: (id: string) => boolean;
  isMounted: boolean;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [persistedCart, setPersistedCart] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );
  const [isMounted, setIsMounted] = useState(false);

  const initialCartState: CartState = {
    items: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    if (!isMounted) {
      persistedCart.forEach((item) => {
        dispatch({
          payload: { item },
          type: ADD_ITEM,
        });
      });
      setIsMounted(true);
    }
  }, [isMounted, persistedCart]);

  useEffect(() => {
    if (isMounted) {
      setPersistedCart(state.items);
    }
  }, [state.items, setPersistedCart, isMounted]);

  const addItemToCart = useCallback((item: CartItem) => {
    dispatch({
      payload: { item },
      type: ADD_ITEM,
    });
  }, []);

  const removeItemFromCart = useCallback((id: string) => {
    dispatch({
      payload: { id },
      type: REMOVE_ITEM,
    });
  }, []);

  const value = useMemo(
    () => ({
      addItemToCart,
      cartItems: isMounted ? state.items : [],
      hasItems: isMounted && state.items.length > 0,
      removeItemFromCart,
      total: isMounted
        ? state.items.reduce((acc, item) => acc + item.price, 0)
        : 0,
      isItemInCart: (id: string) =>
        isMounted && state.items.some((item) => item.id === id),
      isMounted: isMounted,
    }),
    [state.items, addItemToCart, removeItemFromCart, isMounted]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
