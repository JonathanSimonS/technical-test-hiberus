import { createSlice } from '@reduxjs/toolkit';

// TODO get values to localStorage ???
const initialState = {
    'accessToken': '',
    'refreshToken': '',
    'tokenType': ''
  }

export const tokenSlice = createSlice({

    name: 'token', // name to import in store
    initialState,
    reducers: {
        setToken: (state=initialState, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.tokenType = action.payload.tokenType;
        }
    }
})

// Action creators are generated for each case reducer function
export const { setToken } = tokenSlice.actions;

// export to create in store
export default tokenSlice.reducer;
