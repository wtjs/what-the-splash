import { createSlice } from '@reduxjs/toolkit';

const statsSlice = createSlice({
    name: 'imageStats',
    initialState: {},
    reducers: {
        loadImageStats: (state, { payload: id }) => {
            state[id] = {
                isLoading: true,
                downloads: null,
                error: false,
            };
        },
        setImageStats: (state, { payload: { id, downloads } }) => {
            state[id] = { isLoading: false, downloads, error: false };
        },
        setImageStatsError: (state, { payload: id }) => {
            state[id] = {
                isLoading: false,
                downloads: null,
                error: true,
            };
        },
    },
});

export const {
    loadImageStats,
    setImageStats,
    setImageStatsError,
} = statsSlice.actions;

export default statsSlice.reducer;
