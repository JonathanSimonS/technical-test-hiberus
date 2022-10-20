import { combineReducers, configureStore } from '@reduxjs/toolkit'

// reducer
import loggedUserReducer from "./slices/loggedUser/index";
import tokenReducer from "./slices/token/index";

//persist 
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({ 
    loggedUser: loggedUserReducer,
    token: tokenReducer
})

// enhanced reducer with configuration to persist the rootReducer state to localStorage
const persistedReducer = persistReducer(persistConfig, rootReducer)

// which will intercept and stop non-serializable values in action before they get to the reducer.
// when using Redux Persist without using the Thunk middleware, we‘d get an error in the browser’s console reading a non-serializable value was detected in the state.
export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

// function that persists and rehydrates the state
export const persistor = persistStore(store);