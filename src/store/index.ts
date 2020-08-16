import { createStore, combineReducers } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserReducer from "../reducers/UserReducer";

const rootReducer: any = combineReducers({
  user: UserReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export type AppState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store);

export default store;
