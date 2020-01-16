import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header';
import ImageGrid from './components/ImageGrid';

import store from './redux/store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <ImageGrid />
                </Fragment>
            </Provider>
        );
    }
}

export default App;
