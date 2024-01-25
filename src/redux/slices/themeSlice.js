import { createSlice } from "@reduxjs/toolkit";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

const initialState = {
    activeTheme: prefersDarkMode ? 'dark' : 'light'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setActiveTheme: (state, action) => {
            state.activeTheme = action.payload
        }
    }
})

export const { setActiveTheme } = themeSlice.actions

export default themeSlice.reducer