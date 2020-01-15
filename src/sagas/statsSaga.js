import { take, call, fork, put } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import { fetchImageStats } from '../api';
import {
    loadImageStats,
    setImageStats,
    setImageStatsError,
} from '../features/images/statsSlice';

export function* handleStatsRequest(id) {
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImageStats(id));
            const res = yield call(fetchImageStats, id);
            yield put(setImageStats({ id, downloads: res.downloads.total }));
            // image was loaded so we exit the generator
            return true;
        } catch (e) {
            // we just need to retry and dispactch an error
            // if we tried more than 3 times
        }
    }
    yield put(setImageStatsError(id));
}

export default function* watchStatsRequest() {
    while (true) {
        // we get the action here
        const { payload: images } = yield take(IMAGES.LOAD_SUCCESS);

        for (const { id } of images) {
            yield fork(handleStatsRequest, id);
        }
    }
}
