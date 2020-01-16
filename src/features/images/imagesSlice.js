import { createSlice } from '@reduxjs/toolkit';

const imagesSlice = createSlice({
    name: 'images',
    initialState: [],
    reducers: {
        loadImages: () => {},
        setImages: (state, { payload: images }) => {
            state.push(...images);
        },
    },
});

export const { loadImages, setImages } = imagesSlice.actions;
export default imagesSlice.reducer;
