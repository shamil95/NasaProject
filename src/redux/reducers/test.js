import { SET_FAVOURITE_CARD, SET_MOVIES, SET_MOVIES_LOADING } from '../types';

const initialState = {
    test: [],
    message: '',
    movies: [],
    isLoading: false,
    favouriteMovies: [],
};

const test = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case SET_MOVIES_LOADING:
            return {
                ...state,
                isLoading: payload,
            };

        case SET_MOVIES:
            return {
                ...state,
                movies: payload,
            };
        case SET_FAVOURITE_CARD:
            return {
                ...state,
                favouriteMovies: [...state.favouriteMovies, payload],
            };

        default:
            return state;
    }
};

export default test;
