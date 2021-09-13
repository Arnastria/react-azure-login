import { combineReducers } from "redux";
import auth from "./auth";
import redirectUrl from "./redirectUrl";

const RootReducer = combineReducers({
    auth,
    redirectUrl
});

export default RootReducer;
export type Rootstate = ReturnType<typeof RootReducer>;