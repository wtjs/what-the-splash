import { createSlice } from '@reduxjs/toolkit';

const nextPageSlice = createSlice({
    name: 'nextPage',
    initialState: 1,
    reducers: {
        incrementPage: state => {
            return state + 1;
        },
    },
});

export const { incrementPage } = nextPageSlice.actions;

export default nextPageSlice.reducer;
