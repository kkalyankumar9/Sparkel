
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";

import { adminProductReducer } from "./AdminReducer/reducer";
import { reducer as ProductReducer} from "./Products/reducer";
import { cartReducer  } from "./Cart/reducer";

const rootReducer = combineReducers({ adminProductReducer,ProductReducer ,cartReducer});

let middleware = [thunk];
export const store= legacy_createStore(rootReducer,applyMiddleware(...middleware))

export type RootState = ReturnType<typeof store.getState>;

// ✅ Dispatch type that supports thunk
export type AppDispatch = ThunkDispatch<RootState, any, any>;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


