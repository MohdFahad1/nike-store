import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const rootReducer = combineReducers({
    cart: cartReducer,
})
 
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer
});