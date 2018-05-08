const initialState = {
    addExpense: {
        isFetching: false,
        item: {
            name: '',
            price: 0,
            amountPurchased: 0
        },
        error: null
    }
};

export default initialState;
