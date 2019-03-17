import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';

import store from './store/store';
import './styles/main.scss';
import App from './components/App';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('app'),
    );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App', () => {
        // if you are using harmony modules ({modules:false})
        render(App);
        // in all other cases - re-require App manually
        // eslint-disable-next-line global-require
        render(require('./components/App'));
    });
}
