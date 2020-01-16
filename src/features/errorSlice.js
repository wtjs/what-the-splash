import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
    name: 'error',
    initialState: null,
    reducers: {
        setError: (state, { payload: error }) => error,
    },
});

export const { setError } = errorSlice.actions;
export default errorSlice.reducer;
