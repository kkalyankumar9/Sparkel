import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { adminProductReducer } from "./AdminReducer/reducer";
const rootReducer = combineReducers({ adminProductReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
