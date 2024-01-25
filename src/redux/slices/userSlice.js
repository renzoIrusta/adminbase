import {createSlice} from '@reduxjs/toolkit';

const initialState =  {
    dataUser: {},
    hashUser: '',
}

// se exporta el slice
export const userSlice = createSlice({   
    name: 'user',
    initialState,
    reducers: {
        addDataUser: (state, action) => {
            state.dataUser = action.payload
        },
        addHashUser: (state, action) => {
            state.hashUser = action.payload
        },
        removeDataUser: (state) => {
            state.dataUser = {}
        }
    },
});

// Exportando las acciones
export const { addDataUser, addHashUser, removeDataUser } = userSlice.actions;

// Exportando por defecto sólo el reducer
export default userSlice.reducer;