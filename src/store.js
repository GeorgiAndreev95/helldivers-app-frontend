import { configureStore } from "@reduxjs/toolkit";

import factionsReducer from "./slices/factionsSlice";
import authReducer from "./slices/authSlice";
import enemyUnitReducer from "./slices/enemyUnitSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        factions: factionsReducer,
        enemyUnits: enemyUnitReducer,
    },
});

export default store;
