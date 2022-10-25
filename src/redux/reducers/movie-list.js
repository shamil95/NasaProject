import {
    GET_MOVIE_LIST,
    GET_MOVIE_LIST_FETCHING,
    MOVIE_LIST_FILTER_CHANGE,
    REMOVE_MOVIE_ITEM,
    SET_FAVOURITE_CARD
} from '../types';

const initialState = {
    data: [],
    isFetching: false,
    filters: {
        keyword: '',
    },
    favouriteMovies: [],
};

const movieList = (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case GET_MOVIE_LIST: {
            return {
                ...state,
                data: payload,
            };
        }
        case MOVIE_LIST_FILTER_CHANGE: {
            return {
                ...state,
                filters: { ...state.filters, ...payload },
            };
        }
        case REMOVE_MOVIE_ITEM: {
            return {
                ...state,
                data: payload,
            };
        }
        case GET_MOVIE_LIST_FETCHING: {
            return {
                ...state,
                isFetching: payload,
            };
        }
        case SET_FAVOURITE_CARD: {
            return {
                ...state,
                favouriteMovies: [...state.favouriteMovies, payload],
            }
        }
        default:
            return state;
    }
};

export default movieList;
