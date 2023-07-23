// import { ProductObj, ProductState } from "src/constraints/types"
import { ProductObj, ProductState } from "../../constraints/types";
import {
  ADMIN_AUTH_LOGIN_SUCCESS,
  ADMIN_AUTH_LOGOUT_SUCCESS,
  ADMIN_GET_PRODUCT_LOADING,
  ADMIN_GET_PRODUCT_SUCCESS,
} from "./actionTypes";

/*
        rating:number;
        review:string;
        image:string;
        brand:string;
        title:string;
        size:string;
        discountPrice:number;
        price:number;
        discountPercentage:string;
        id:string;
        isNew:boolean;
        assured:boolean;
        gender:string
*/
interface ActionType {
  type: string;
  payload: ProductObj[];
  totalResult: number;
}
const intitalState: ProductState = {
  productArr: [],
  isError: false,
  isLoading: false,
  totalResult: 0,
  isAdminAuth: false,
};

export const adminProductReducer = (
  state: ProductState = intitalState,
  { type, payload, totalResult }: ActionType
): ProductState => {
  switch (type) {
    case ADMIN_GET_PRODUCT_LOADING:
      return { ...state, isLoading: true, isError: false };
    case ADMIN_AUTH_LOGIN_SUCCESS:
      return { ...state, isAdminAuth: true };
    case ADMIN_AUTH_LOGOUT_SUCCESS:
      return { ...state, isAdminAuth: false };
    case ADMIN_GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        productArr: payload,
        totalResult: +totalResult,
      };
    default:
      return { ...state };
  }
};

// import {
//   ADD_PRODUCT_SUCCESS,
//   PRODUCT_FAILURE,
//   PRODUCT_REQUEST,
//   GET_PRODUCT_SUCCESS,
//   EDIT_PRODUCT_SUCCESS,
// } from "./actionTypes";

// interface Product {
//   id: number;
//   // Add other properties here
// }

// interface State {
//   isLoading: boolean;
//   isError: boolean;
//   products: Product[];
// }

// const initialState: State = {
//   isLoading: false,
//   isError: false,
//   products: [],
// };

// export const reducer = (
//   state: State = initialState,
//   action: { type: string; payload: any }
// ): State => {
//   switch (action.type) {
//     case PRODUCT_REQUEST:
//       return { ...state, isLoading: true };
//     case GET_PRODUCT_SUCCESS:
//       return { ...state, isLoading: false, products: action.payload };
//     case ADD_PRODUCT_SUCCESS:
//       return { ...state, isLoading: true, isError: false };
//     case EDIT_PRODUCT_SUCCESS:
//       const editedProductIndex = state.products.findIndex(
//         (product) => product.id === action.payload.id
//       );
//       const editedProductList = [...state.products];
//       editedProductList[editedProductIndex] = action.payload;
//       return { ...state, isLoading: false, products: editedProductList };
//     case PRODUCT_FAILURE:
//       return { ...state, isError: true };
//     default:
//       return state;
//   }
// };
