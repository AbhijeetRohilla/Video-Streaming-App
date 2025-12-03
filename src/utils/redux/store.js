import { configureStore } from '@reduxjs/toolkit';
import appSlice from "./appSlice.js";

export const store = configureStore({
    reducer: {
        app:appSlice        
    },
});

export default store;