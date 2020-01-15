import { IMAGES } from '../constants';

const loadImages = () => ({
    type: IMAGES.LOAD,
});

const setError = error => ({
    type: IMAGES.LOAD_FAIL,
    error,
});

export { loadImages, setError };
