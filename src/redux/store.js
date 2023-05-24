import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//initial state values
const initialState = {
    page: 1,
    category: '',
    categories: [],
    photos: [],
    startIndex: 0,
    endIndex: 9,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // fetch initial photos and categoris
        case 'INITIAL_FETCH':
            return { ...state, photos: action.photos, categories: action.categories };
        // fetch the new category and set the photos to the category photos page, startIndex, endIndex return to initial state
        case 'CATEGORY_FETCH':
            return { ...state, photos: action.photos, category: action.category, page: 1, startIndex: 0, endIndex: 9 };
        // increment page number and set the new start index, endIndex
        case 'INCREMENT_PAGE':
            return { ...state, page: state.page + 1, startIndex: state.startIndex + 9, endIndex: state.endIndex + 9 };
        // decrement page number and set the new start index, endIndex
        case 'DECREMENT_PAGE':
            return { ...state, page: state.page - 1, startIndex: state.startIndex - 9, endIndex: state.endIndex - 9 };
        case 'SET_CATEGORY':
            return { ...state, category: action.payload };
        default:
            return state;
    }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;