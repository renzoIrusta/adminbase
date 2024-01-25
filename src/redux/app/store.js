import { configureStore } from '@reduxjs/toolkit';
// import userReducer from '../slices/userSlice';
import themeReducer from '../slices/themeSlice';
// import {
//     usersApi,
// } from '../apicalls/usersApis';

export const store = configureStore({
    reducer: {
        // user: userReducer,
        theme: themeReducer,
        // Aquí se agregan los reducers de las apis, aquí se almacenan los datos de las apis

        // [usersApi.reducerPath]: usersApi.reducer,
    },
    // Aquí se agregan los middlewares de las apis
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(
            // usersApi.middleware,
        ),
})