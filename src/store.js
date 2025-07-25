import { configureStore } from "@reduxjs/toolkit";

import factionsReducer from "./slices/factionsSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
    reducer: {
        factions: factionsReducer,
        auth: authReducer,
    },
});

export default store;
