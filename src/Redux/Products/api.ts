import axios, { AxiosResponse } from "axios";
import { ProductDatatype } from "./ProductType";



let URL = "https://sparkel.onrender.com";

export const getProductsAPI = async (getProductsParam?: {
  // params: { category: string[] };
}) => {
  try {
    let response: AxiosResponse<ProductDatatype[]> = await axios.get(
      `${URL}/data`,
      getProductsParam
    );
    return response.data;
  } catch (e) {
    console.error("getProductsAPI error", e);
  }
};

export const updateProuctAPI = async (
  id: number,
  payload: { title: string; price: number }
) => {
  try {
    let response: AxiosResponse<ProductDatatype> = await axios.patch(
      `${URL}/data/${id}`,
      payload
    );
    return response.data;
  } catch (e) {
    console.error("updateProductsAPI error", e);
  }
};