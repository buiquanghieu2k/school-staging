import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import userSlice from "./Reducers/userSlice";
import loadingSlice from "./Reducers/loadingSlice";

const rootReducer = combineReducers({
  user: userSlice,
  loading: loadingSlice
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk]
});

export const persistor = persistStore(store);

export type IRootState = ReturnType<typeof store.getState>;
