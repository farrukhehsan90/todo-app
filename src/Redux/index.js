import { createStore, applyMiddleware, combineReducers } from "redux";

import todoReducer from "./Reducers/todoReducer";

import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};
let rootReducer = combineReducers({
  todoReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
