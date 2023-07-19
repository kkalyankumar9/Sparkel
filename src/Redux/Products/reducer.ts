import { ProductDatatype } from "../../ProductType"
import { AppAction } from "./action";
import { GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionType";

const initialState={
    products:[],
    isLoading:false,
    isError:false

}
interface productType{
    products:ProductDatatype[];
    isLoading:boolean;
    isError:boolean
}

export const reducer=(state:productType=initialState,action:AppAction):productType=>{
    const  {type}=action
    switch(type){
        case GET_PRODUCTS_REQUEST:return{...state,isLoading:true,isError:false}
        case GET_PRODUCTS_FAIL:return{...state,isLoading:false,isError:true}
        case GET_PRODUCTS_SUCCESS:
            return{
                ...state,isLoading:false,products:[...state.products, ...action.payload]
            }
default :
return state
    }
}
// (
//     oldState: IAppState = initialState,
//     action: AppAction
//   ): IAppState => {
//     const { type } = action;

