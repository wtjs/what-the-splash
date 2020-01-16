import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers: {
        setLoading: (state, { payload: isLoading }) => isLoading,
    },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
