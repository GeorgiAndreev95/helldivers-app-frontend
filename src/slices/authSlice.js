import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("userToken") || null;
const initialRole = localStorage.getItem("userRole") || null;

const initialState = {
    token: initialToken,
    role: initialRole,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
    },
});

export const { setToken, setRole } = authSlice.actions;

export default authSlice.reducer;
