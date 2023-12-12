import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/UserSlice"
import internsReducer from "../features/applications/InternSlice"
import talentReducer from "../features/applications/TalentSlice"
import companyReducer from "../features/applications/CompanySlice"
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  serialize: (data) => JSON.stringify(data, null, 2),
  deserialize: (data) => JSON.parse(data),
};

const reducer = combineReducers({
  user: userReducer,
  internApplications: internsReducer,
  talentApplications: talentReducer,
  companyApplications: companyReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, ...getDefaultMiddleware({
    serializableCheck: false
  })]
});

export default store;


