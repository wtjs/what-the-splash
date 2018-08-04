import { put, call, takeEvery, select } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import fetchImages from '../api';

const getPage = state => state.nextPage;

function* handleImagesLoad() {
    try {
        const page = select(getPage);
        const images = yield call(fetchImages, page);
        yield put({ type: IMAGES.LOAD_SUCCESS, images });
    } catch (error) {
        yield put({ type: IMAGES.LOAD_FAIL, error: error.toString() });
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
