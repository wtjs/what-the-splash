import { put, takeEvery } from 'redux-saga/effects';

import { incrementPage } from '../features/pageSlice';
import { loadImages } from '../features/imagesSlice';

export function* handleIncrementPage() {
    yield put(loadImages());
}

export default function*() {
    yield takeEvery(incrementPage, handleIncrementPage);
}
