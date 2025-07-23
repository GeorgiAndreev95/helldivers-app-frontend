import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    factions: [],
};

export const factionsSlice = createSlice({
    name: "factions",
    initialState,
    reducers: {
        setFactions: (state, action) => {
            state.factions = action.payload;
        },
    },
});

export const { setFactions } = factionsSlice.actions;

export default factionsSlice.reducer;
