import {ADD_ARTICLE} from './constants';

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ARTICLE:
            return {
                ...state,
                articles: [...state.articles, action.payload]
            };
        default:
            return state;
    }
};

export default rootReducer;