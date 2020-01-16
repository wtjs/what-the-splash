import { put, call, takeEvery, select, all } from 'redux-saga/effects';

import { setImages, loadImages } from '../features/imagesSlice';
import { fetchImages } from '../api';
import { setError } from '../features/errorSlice';
import { goNext } from '../features/pageSlice';
import { setLoading } from '../features/loadingSlice';

export const getPage = state => state.nextPage;

export function* handleImagesLoad() {
    try {
        yield put(setLoading(true));
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);

        yield all([put(setError(null)), put(setImages(images)), put(goNext())]);
    } catch (error) {
        yield put(setError(error.toString()));
    } finally {
        yield put(setLoading(false));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(loadImages, handleImagesLoad);
}
