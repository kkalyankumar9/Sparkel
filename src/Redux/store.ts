import { applyMiddleware, legacy_createStore,combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as ProductReducer} from "./Products/reducer.js";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer=combineReducers({ProductReducer})
let middleware = [thunk];
export const store= legacy_createStore(rootReducer,applyMiddleware(...middleware))


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;