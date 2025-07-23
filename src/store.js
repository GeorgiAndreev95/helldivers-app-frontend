import { configureStore } from "@reduxjs/toolkit";

import factionsReducer from "./slices/factionsSlice";

const store = configureStore({
    reducer: {
        factions: factionsReducer,
    },
});

export default store;
