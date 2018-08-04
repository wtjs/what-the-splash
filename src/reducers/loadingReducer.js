import { IMAGES } from '../constants';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case IMAGES.LOAD:
            return true;
        case IMAGES.SUCCESS:
            return false;
        case IMAGES.FAIL:
            return false;
        default:
            return state;
    }
};

export default loadingReducer;
