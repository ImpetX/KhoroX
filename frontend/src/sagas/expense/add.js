import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects';
import axios from 'axios';

import config from '../../config/localhost';
import {Actions} from '../../constants';

const {API_URL} = config;

function addExpense(action) {
    return axios.post(`${API_URL}`, action.payload);
}

function* addExpenseSaga(action) {
    try {
        if (action.type === Actions.ADD_EXPENSE_REQUEST) {
            const response = yield call(addExpense, action);
            yield put({type: Actions.ADD_EXPENSE_SUCCESSFUL, payload: response.data});
        }

    } catch (error) {
        yield put({type: Actions.ADD_EXPENSE_FAILURE, error});
    }
}

function* watchAddExpenseSaga() {
    yield takeLatest(Actions.ADD_EXPENSE_REQUEST, addExpenseSaga);
}

export default watchAddExpenseSaga;
