import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
});

export default rootReducer;
