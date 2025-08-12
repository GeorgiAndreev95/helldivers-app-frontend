import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEnemyUnits } from "../services/enemyUnitService";

export const fetchEnemyUnits = createAsyncThunk(
    "enemyUnits/fetchEnemyUnits",
    async () => {
        const data = await getEnemyUnits();
        console.log(data);
        return data.enemyUnits;
    }
);

const initialState = {
    enemyUnits: [],
    status: "idle",
    error: null,
};

export const enemyUnitSlice = createSlice({
    name: "enemyUnits",
    initialState,
    reducers: {
        setEnemyUnits: (state, action) => {
            state.enemyUnits = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEnemyUnits.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchEnemyUnits.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.enemyUnits = action.payload;
            })
            .addCase(fetchEnemyUnits.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { setEnemyUnits } = enemyUnitSlice.actions;

export default enemyUnitSlice.reducer;
