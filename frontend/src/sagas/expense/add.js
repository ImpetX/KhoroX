import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects';

import {Actions} from '../../constants';

function* addExpenseSaga(action) {
    try {
        if (action.type === Actions.ADD_EXPENSE_REQUEST) {
            yield put({type: Actions.ADD_EXPENSE_SUCCESSFUL, payload: action.payload});
        }

    } catch (error) {
        yield put({type: Actions.ADD_EXPENSE_FAILURE, error});
    }
}

function* watchAddExpenseSaga() {
    yield takeLatest(Actions.ADD_EXPENSE_REQUEST, addExpenseSaga);
}

export default watchAddExpenseSaga;
