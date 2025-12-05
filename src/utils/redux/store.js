import { configureStore } from '@reduxjs/toolkit';
import appSlice from "./appSlice.js";
import liveSlice from "./liveFeatureSlice.js";

export const store = configureStore({
    reducer: {
        app:appSlice,
        live:liveSlice
    },
});

export default store;