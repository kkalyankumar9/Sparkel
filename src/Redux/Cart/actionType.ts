// src/redux/cartTypes.ts

export const FETCH_CART_REQUEST = "FETCH_CART_REQUEST";
export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";
export const FETCH_CART_FAILURE = "FETCH_CART_FAILURE";

export const INCREMENT_QTY = "INCREMENT_QTY";
export const DECREMENT_QTY = "DECREMENT_QTY";
export const DELETE_ITEM = "DELETE_ITEM";

// --- Cart Item type ---
export interface CartItem {
  id: number;
  image: string;
  brand: string;
  title: string;
  size: string;
  discountprice: number;
  price: number;
  discountPercentage: string;
  type: string;
  category: string;
  ratings: number;
  reviews: string;
  isNew: boolean;
  assured: boolean;
  gender: string;
  quantity: number; 
}

// --- State type ---
export interface CartState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
}

// --- Action Types ---
interface FetchCartRequestAction {
  type: typeof FETCH_CART_REQUEST;
}

interface FetchCartSuccessAction {
  type: typeof FETCH_CART_SUCCESS;
  payload: CartItem[];
}

interface FetchCartFailureAction {
  type: typeof FETCH_CART_FAILURE;
  payload: string;
}

interface IncrementQtyAction {
  type: typeof INCREMENT_QTY;
  payload: number; // item.id
}

interface DecrementQtyAction {
  type: typeof DECREMENT_QTY;
  payload: number; // item.id
}

interface DeleteItemAction {
  type: typeof DELETE_ITEM;
  payload: number; // item.id
}

export type CartActionTypes =
  | FetchCartRequestAction
  | FetchCartSuccessAction
  | FetchCartFailureAction
  | IncrementQtyAction
  | DecrementQtyAction
  | DeleteItemAction;
