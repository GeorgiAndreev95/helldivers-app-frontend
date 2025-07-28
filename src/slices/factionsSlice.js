import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFactions } from "../services/factionService";

export const fetchFactions = createAsyncThunk(
    "factions/fetchFactions",
    async () => {
        const data = await getFactions();
        return data.factions;
    }
);

const initialState = {
    factions: [],
    status: "idle",
    error: null,
};

export const factionsSlice = createSlice({
    name: "factions",
    initialState,
    reducers: {
        setFactions: (state, action) => {
            state.factions = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFactions.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchFactions.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.factions = action.payload;
            })
            .addCase(fetchFactions.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { setFactions } = factionsSlice.actions;

export default factionsSlice.reducer;
