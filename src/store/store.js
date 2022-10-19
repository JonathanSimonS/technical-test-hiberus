import { configureStore } from '@reduxjs/toolkit'

// reducer
import loggedUserReducer from "./slices/loggedUser/index";
import tokenReducer from "./slices/token/index";

export const store = configureStore({
    
    // rootReducer
    reducer: {
        loggedUser: loggedUserReducer,
        token: tokenReducer,
    },
})