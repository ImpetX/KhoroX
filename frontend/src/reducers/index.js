import {combineReducers} from 'redux';

import addExpenseReducer from './expense/add';

const rootReducer = combineReducers({addExpense: addExpenseReducer});

export default rootReducer;
