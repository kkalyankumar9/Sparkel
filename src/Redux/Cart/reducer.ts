// src/redux/cartReducer.ts
import {
  CartState,
  CartActionTypes,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  INCREMENT_QTY,
  DECREMENT_QTY,
  DELETE_ITEM,
} from "./actionType";

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};

export const cartReducer = (
  state = initialState,
  action: CartActionTypes
): CartState => {
  switch (action.type) {
    case FETCH_CART_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_CART_SUCCESS:
      return { ...state, loading: false, items: action.payload };

    case FETCH_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case INCREMENT_QTY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case DECREMENT_QTY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
