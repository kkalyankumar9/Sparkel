import axios from "axios";
// import { useDispatch } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import {
  ADMIN_GET_PRODUCT_FAILURE,
  ADMIN_GET_PRODUCT_SUCCESS,
  ADMIN_GET_PRODUCT_LOADING,
  PAGE_UPDATE,
  ADMIN_AUTH_LOGIN_SUCCESS,
  ADMIN_AUTH_LOGOUT_SUCCESS,
} from "./actionTypes";

import { ProductObj } from "../../constraints/types";
export const getAdminProudcts =
  (dispatch: Dispatch, queriesObject: any) => () => {
    dispatch({ type: ADMIN_GET_PRODUCT_LOADING });
    try {
      axios
        .get(`https://sparkel.onrender.com/data`, queriesObject)
        .then((req) => {
          dispatch({
            type: ADMIN_GET_PRODUCT_SUCCESS,
            payload: req.data,
            totalResult: req.headers["x-total-count"],
          });
        });
    } catch (err) {
      dispatch({ type: ADMIN_GET_PRODUCT_FAILURE });
    }
  };

export const deleteAdminProduct = (id: number) => {
  return axios.delete(`https://sparkel2.onrender.com/data/${id}`);
};

export const adminLogin = (dispatch: Dispatch) => () => {
  dispatch({ type: ADMIN_AUTH_LOGIN_SUCCESS });
};

export const adminLogout = (dispatch: Dispatch) => () => {
  dispatch({ type: ADMIN_AUTH_LOGOUT_SUCCESS });
};

