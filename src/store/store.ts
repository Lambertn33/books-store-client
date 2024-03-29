import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "redux";

import booksReducer from "./books/booksSlice";

import bookReducer from "./books/bookSlice";

import authReducer from "./auth/authSlice";

import cartReducer from "./cart/cartSlice";

import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  books: booksReducer,
  book: bookReducer,
  auth: authReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
