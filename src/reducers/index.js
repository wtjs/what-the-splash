import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import imagesReducer from '../features/images/imagesSlice';
import errorReducer from './errorReducer';
import pageReducer from './pageReducer';
import statsReducer from '../features/images/statsSlice';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
    nextPage: pageReducer,
    imageStats: statsReducer,
});

export default rootReducer;
