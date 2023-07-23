import { types } from "util";
import { AppDispatch } from "../store";
import { DispatchType, ProductDatatype } from "./ProductType";
import { GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS,  UPDATE_PRODUCT_SUCCESS } from "./actionType";
import { getProductsAPI, updateProuctAPI } from "./api";


export type AppAction =
  | IProductRequest
  | IProductError
  | IGetProductSuccess
//   | ISortProductSuccess
//   | IUpdateProductSuccess;

export interface IProductRequest {
    type: typeof GET_PRODUCTS_REQUEST;
  }
export interface IProductError{
    type:typeof GET_PRODUCTS_FAIL
}
export interface   IGetProductSuccess{
    type:typeof GET_PRODUCTS_SUCCESS
    payload: ProductDatatype[];
}
  const productRequest = (): IProductRequest => {
    return { type: GET_PRODUCTS_REQUEST };
  };
  const ProductError = (): IProductError => {
    return { type:GET_PRODUCTS_FAIL};
  };
  const GetProductSuccess = (products: ProductDatatype[]): IGetProductSuccess => {
    return { type:GET_PRODUCTS_SUCCESS,payload:products};
  };
 
  

//   const getProducts=()=async(dispatch:DispatchType)=>{
// try {
    
// } catch (error)
 //{
    
// }
//   }
export interface IUpdateProductSuccess {
  type: typeof UPDATE_PRODUCT_SUCCESS;
  payload: ProductDatatype;
}
const updateProductSuccess = (
  payload: ProductDatatype
): IUpdateProductSuccess => {
  return { type: UPDATE_PRODUCT_SUCCESS, payload };
};

export const getProducts =
(getProductsParam?: {
  params: { category: string[]; gender?: string[]; order?: string };
}): any =>
async (dispatch: AppDispatch) => {
  dispatch(productRequest());
  try {
    let data = await getProductsAPI(getProductsParam);
    if (data) {
      dispatch(GetProductSuccess(data));
      console.log(data)
    }
  } catch (e) {
    dispatch(ProductError());
  }
};
export const updateProduct =
  (id: number, payload: { title: string; price: number }): any =>
  async (dispatch: AppDispatch) => {
    dispatch(productRequest());
    try {
      let data = await updateProuctAPI(id, payload);
      if (data) {
       // dispatch(updateProductSuccess(data));
      }
    } catch (e) {
      dispatch(ProductError());
    }
  };
