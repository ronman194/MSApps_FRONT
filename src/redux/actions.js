import axios from 'axios';

export const fetchPhotos = () => { //fetch photos, categories and update redux state
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:5000/photos');
            const photos = response.data.photos;
            const categories = response.data.tags;
            dispatch({ type: 'INITIAL_FETCH', photos: photos, categories: categories }); //initial fetch to redux state 
        } catch (error) {
            console.log(error);
        }
    };
};

export const fetchCategory = (category) => { //get a string with category name and set the category in the redux state + set category photos
    return async (dispatch) => {
        try {
            console.log(category)
            const response = await axios.get('http://localhost:5000/photos/category', { params: { category: category }, });
            const photos = response.data.photos;
            dispatch({ type: 'CATEGORY_FETCH', photos: photos, category: category }); // set photos and category in redux state
        } catch (error) {
            console.log(error);
        }
    };
};


export const incrementPage = () => {
    return { type: 'INCREMENT_PAGE' };
};

export const decrementPage = () => {
    return { type: 'DECREMENT_PAGE' };
};