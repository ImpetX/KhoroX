import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import {dogs} from './reducers';

const rootReducer = combineReducers({dogs});
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), reduxDevTools));

sagaMiddleware.run(rootSaga);

export default store;