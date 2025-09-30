"use client";

import React, {
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

  const initialCartState: CartState = {
    items: persistedCart,
  };

  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    setPersistedCart(state.items);
  }, [state.items, setPersistedCart]);

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
      cartItems: state.items,
      hasItems: state.items.length > 0,
      removeItemFromCart,
      total: state.items.reduce((acc, item) => acc + item.price, 0),
    }),
    [state.items, addItemToCart, removeItemFromCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
