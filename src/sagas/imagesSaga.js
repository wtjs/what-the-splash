import { put, call, takeEvery, select, all } from 'redux-saga/effects';

import { fetchImages } from '../api';
import { setImages, loadImages } from '../features/imagesSlice';
import { setError } from '../features/errorSlice';
import { setLoading } from '../features/loadingSlice';

function putAll(actions) {
    return all(actions.map(action => put(action)));
}

export function* handleImagesLoad() {
    try {
        yield put(setLoading(true));
        const page = yield select(state => state.nextPage);
        const images = yield call(fetchImages, page);

        yield putAll([setError(null), setImages(images)]);
    } catch (error) {
        yield put(setError(error.toString()));
    } finally {
        yield put(setLoading(false));
    }
}

export default function*() {
    yield takeEvery(loadImages, handleImagesLoad);
}
