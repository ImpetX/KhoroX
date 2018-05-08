import {initialState,
    Actions as types} from '../../constants';

function addExpenseReducer(state = initialState.addExpense, action) {
    switch(action.type) {
        case types.ADD_EXPENSE_REQUEST:
            return {...state, isFetching: true};
        case types.ADD_EXPENSE_SUCCESSFUL:
            return {...state, isFetching: false, item: action.payload};
        case types.ADD_EXPENSE_FAILURE:
            return {...state, isFetching: false, error: action.error};
        default:
            return state;
    }
}

export default addExpenseReducer;
