import {ADD_ARTICLE} from './constants';

export const addArticle = article => (
    {
        type: ADD_ARTICLE,
        payload: article
    }
);