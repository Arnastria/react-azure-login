import { createStore } from "redux";
import RootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import PersistConfig from "./persistConfig";

let reducers = persistReducer(PersistConfig, RootReducer);
const ReduxStore = createStore(
    reducers,
);
const Persistor: any = persistStore(ReduxStore);

export { Persistor, ReduxStore };
