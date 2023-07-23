import axios, { AxiosResponse } from "axios";
import { ProductDatatype } from "./ProductType";




let URL = "https://gold-gorgeous-ostrich.cyclic.app/";

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