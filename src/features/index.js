import { combineReducers } from 'redux';

import loadingReducer from './loadingSlice';
import errorReducer from './errorSlice';
import pageReducer from './pageSlice';
import imagesReducer from './imagesSlice';
import statsReducer from './statsSlice';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
    nextPage: pageReducer,
    imageStats: statsReducer,
});

export default rootReducer;
