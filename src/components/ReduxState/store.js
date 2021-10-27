import { configureStore } from "@reduxjs/toolkit"
import myReducer from "./actions"
import { persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'



const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const persistedReducer = persistReducer(persistConfig, myReducer)

export const store = configureStore({
  reducer: { persistedReducer }
})