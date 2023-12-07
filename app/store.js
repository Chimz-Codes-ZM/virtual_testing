import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/UserSlice"
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  serialize: (data) => JSON.stringify(data, null, 2), // Serialize non-serializable values
  deserialize: (data) => JSON.parse(data),
};

const reducer = combineReducers({
  user: userReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, ...getDefaultMiddleware()]
});

export default store;
