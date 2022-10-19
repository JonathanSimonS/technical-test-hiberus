import { createSlice } from '@reduxjs/toolkit';

// TODO get values to localStorage ???
const initialState = {
    'email': '',
    'name': '',
    'surname': '',
    'id': ''
}

export const loggedUserSlice = createSlice({

    name: 'loggedUser', // name to import in store
    initialState,
    reducers: {
        setLoggedUser: (state=initialState, action) => {
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.surname = action.payload.surname;
            state.id = action.payload.id;
        }
    }
})

// Action creators are generated for each case reducer function
export const { setLoggedUser } = loggedUserSlice.actions;

// export to create in store
export default loggedUserSlice.reducer;
