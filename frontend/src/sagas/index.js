import {all, call} from 'redux-saga/effects';

import watchAddExpenseSaga from './expense/add';

function* rootSaga() {
    yield all([
        call(watchAddExpenseSaga),
    ]);
}

export default rootSaga;
