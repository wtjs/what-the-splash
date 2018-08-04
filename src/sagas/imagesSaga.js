import { put, call, takeEvery } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import fetchImages from '../api';

function* handleImagesLoad() {
    try {
        const images = yield call(fetchImages);
        yield put({ type: IMAGES.LOAD_SUCCESS, images });
    } catch (error) {
        yield put({ type: IMAGES.LOAD_FAIL, error });
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
