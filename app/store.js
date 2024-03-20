import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/UserSlice"
import internsReducer from "../features/applications/InternSlice"
import talentReducer from "../features/applications/TalentSlice"
import companyReducer from "../features/applications/CompanySlice"
import suggestionReducer from "../features/applications/SuggestionSlice"
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  user: userReducer,
  internApplications: internsReducer,
  talentApplications: talentReducer,
  companyApplications: companyReducer,
  inputSuggestion: suggestionReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export default store;


