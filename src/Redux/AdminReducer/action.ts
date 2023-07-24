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
  return axios.delete(`https://sparkel.onrender.com/data/${id}`);
};

export const adminLogin = (dispatch: Dispatch) => () => {
  dispatch({ type: ADMIN_AUTH_LOGIN_SUCCESS });
};

export const adminLogout = (dispatch: Dispatch) => () => {
  dispatch({ type: ADMIN_AUTH_LOGOUT_SUCCESS });
};

// export const adminLogin = (dispatch: Dispatch) => () => {
//   dispatch({ type: ADMIN_AUTH_LOGIN_SUCCESS });
// };

// export const adminLogout = (dispatch: Dispatch) => () => {
//   dispatch({ type: ADMIN_AUTH_LOGOUT_SUCCESS });
// };

// import { Dispatch, AnyAction } from "redux";
// import axios from "axios";

// import {
//   PRODUCT_FAILURE,
//   PRODUCT_REQUEST,
//   GET_PRODUCT_SUCCESS,
//   ADD_PRODUCT_SUCCESS,
//   EDIT_PRODUCT_SUCCESS,
// } from "./actionTypes";

// const baseURL = "https://sparkel.onrender.com/data";

// // Getting the Products

// export const getProduct = (dispatch: Dispatch<AnyAction>) => {
//   dispatch({ type: PRODUCT_REQUEST });
//   axios
//     .get(baseURL)
//     .then((res) => {
//       dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
//     })
//     .catch(() => {
//       dispatch({ type: PRODUCT_FAILURE });
//     });
// };

// // Posting the products

// export const addProduct = (data: any) => (dispatch: Dispatch<AnyAction>) => {
//   dispatch({ type: PRODUCT_REQUEST });

//   axios
//     .post(`https://sparkel.onrender.com/data`, data)
//     .then((res) => {
//       dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data });
//     })
//     .catch(() => {
//       dispatch({ type: PRODUCT_FAILURE });
//     });
// };

// // Editing the products

// export const editProduct =
//   (id: string, data: any) => (dispatch: Dispatch<AnyAction>) => {
//     dispatch({ type: PRODUCT_REQUEST });

//     axios
//       .put(`${baseURL}/${id}`, data)
//       .then((res) => {
//         dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: res.data });
//       })
//       .catch(() => {
//         dispatch({ type: PRODUCT_FAILURE });
//       });
//   };

// // deleting the products

// export const deleteProduct = async (id: number) => {
//   try {
//     const response = await axios.delete(
//       `https://sparkel.onrender.com/data/${id}`
//     );
//     return response.data;
//   } catch (error) {
//     throw new Error(`Failed to delete product: ${error}`);
//   }
// };
