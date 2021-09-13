import { combineReducers } from "redux";
import auth from "./auth";

const RootReducer = combineReducers({
    auth,
});

export default RootReducer;
export type Rootstate = ReturnType<typeof RootReducer>;