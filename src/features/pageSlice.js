import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
    name: 'page',
    initialState: { current: 1 },
    reducers: {
        incrementPage: state => {
            ++state.current;
        },
    },
});

export const { incrementPage } = pageSlice.actions;

export default pageSlice.reducer;
