import { put, call, takeEvery, select, all } from 'redux-saga/effects';

import { fetchImages } from '../api';
import { setImages, loadImages } from '../features/imagesSlice';
import { setError } from '../features/errorSlice';
import { incrementPage } from '../features/pageSlice';
import { setLoading } from '../features/loadingSlice';

export const getPage = state => state.nextPage;

function putAll(actions) {
    return all(actions.map(action => put(action)));
}

export function* handleImagesLoad() {
    try {
        yield put(setLoading(true));
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);

        yield putAll([setError(null), setImages(images), incrementPage()]);
    } catch (error) {
        yield put(setError(error.toString()));
    } finally {
        yield put(setLoading(false));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(loadImages, handleImagesLoad);
}
