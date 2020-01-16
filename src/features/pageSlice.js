import { createSlice } from '@reduxjs/toolkit';

const nextPageSlice = createSlice({
    name: 'nextPage',
    initialState: 1,
    reducers: {
        goNext: state => {
            return state + 1;
        },
    },
});

export const { goNext } = nextPageSlice.actions;

export default nextPageSlice.reducer;
