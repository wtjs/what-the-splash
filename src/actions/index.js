import { IMAGES } from '../constants';

const loadImages = () => ({
    type: IMAGES.LOAD,
});

const loadImagesSuccess = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images,
});

const loadImagesFail = error => ({
    type: IMAGES.LOAD_FAIL,
    error,
});

export { loadImages, loadImagesSuccess, loadImagesFail };
