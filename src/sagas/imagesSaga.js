import { put, call, takeEvery, select } from 'redux-saga/effects';

import { loadImagesSuccess, loadImagesFail } from '../actions';
import { IMAGES } from '../constants';
import fetchImages from '../api';

const getPage = state => state.nextPage;

function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(loadImagesSuccess(images));
    } catch (error) {
        yield put(loadImagesFail(error.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
