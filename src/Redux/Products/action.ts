import { DispatchType, ProductDatatype } from "../../ProductType";
import { GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionType";


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

  const getProducts=()=async(dispatch:DispatchType)=>{
try {
    
} catch (error) {
    
}
  }
  