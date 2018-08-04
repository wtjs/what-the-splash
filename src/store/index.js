import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// import sagas
// import sagas

import rootReducer from '../reducers';

const configureStore = () => {
    // const sagaMiddleware = createSagaMiddleware();
    return createStore(
        rootReducer,
        // redux dev tools extension
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
    // return createStore(reducer, applyMiddleware(sagaMiddleware));
};

export default configureStore;

// sagaMiddleware.run(sagas);
