import { ADD_ITEM, REMOVE_ITEM } from "@/utils/constants";
import { Game } from "@/utils/endpoint";

export type CartItem = Omit<Game, "isNew">;

export interface CartState {
  items: CartItem[];
}

type Action =
  | {
      payload: { item: CartItem };
      type: typeof ADD_ITEM;
    }
  | { payload: { id: string }; type: typeof REMOVE_ITEM };

export const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case ADD_ITEM: {
      const { item } = action.payload;
      const itemExists = state.items.some((i) => i.id === item.id);

      if (itemExists) {
        return state;
      }

      return {
        ...state,
        items: [...state.items, item],
      };
    }

    case REMOVE_ITEM: {
      const { id } = action.payload;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== id.toString()),
      };
    }

    default:
      return state;
  }
};
