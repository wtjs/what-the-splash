import { all } from 'redux-saga/effects';

import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';
import pageSaga from './pageSaga';

export default function* rootSaga() {
    yield all([imagesSaga(), statsSaga(), pageSaga()]);
}
