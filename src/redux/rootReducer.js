import { combineReducers } from "redux";
import appReducer from "./appReducerStore";
export const rootReducer = combineReducers({
    appStateReducer: appReducer
})