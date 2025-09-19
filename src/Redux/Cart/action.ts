// src/redux/cartActions.ts
import axios from "axios";
import { Dispatch } from "redux";
import { DECREMENT_QTY, DELETE_ITEM, FETCH_CART_FAILURE, FETCH_CART_REQUEST, FETCH_CART_SUCCESS, INCREMENT_QTY } from "./actionType";



// ✅ Fetch cart from backend
export const fetchCart = () => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_CART_REQUEST });
  try {
    const res = await axios.get("https://sparkel2.onrender.com/cart");
    const data = res.data.map((item: any) => ({ ...item, quantity: 1 }));
    dispatch({ type: FETCH_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_CART_FAILURE, payload: error });
  }
};

// ✅ Delete item
export const deleteItem = (id: number) => async (dispatch: Dispatch) => {
  try {
    await axios.delete(`https://sparkel2.onrender.com/cart/${id}`);
    dispatch({ type: DELETE_ITEM, payload: id });
  } catch (error) {
    console.error(error);
  }
};

// ✅ Quantity updates
export const incrementQty = (index: number) => ({
  type: INCREMENT_QTY,
  payload: index,
});

export const decrementQty = (index: number) => ({
  type: DECREMENT_QTY,
  payload: index,
});
