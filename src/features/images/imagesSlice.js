import { createSlice } from '@reduxjs/toolkit';

const imagesSlice = createSlice({
    name: 'images',
    initialState: [],
    reducers: {
        setImages: (state, action) => {
            state.push(...action.payload);
        },
    },
});

export const { setImages } = imagesSlice.actions;
export default imagesSlice.reducer;
