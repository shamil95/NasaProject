import {
    GET_MOVIE_LIST,
    GET_MOVIE_LIST_FETCHING,
    MOVIE_LIST_FILTER_CHANGE,
    REMOVE_MOVIE_ITEM,
    SEARCH_FILTER,
} from '../types';
import axios from 'axios';
import { getMoviesList } from '../../services/api';

export const getMovieList = () => async dispatch => {
    try {
        dispatch(setMoviesFetching(true));

        const res = await axios.get(getMoviesList);

        if (!res) {
            dispatch(setMoviesFetching(false));
            return;
        }

        dispatch(setMoviesList(res.data.Search));
        dispatch(setMoviesFetching(false));
    } catch (e) {
        console.log(e);
    }
};

export const changeMovieListFilters = filters => ({
    type: MOVIE_LIST_FILTER_CHANGE,
    payload: filters,
});

export const setMoviesList = payload => ({
    type: GET_MOVIE_LIST,
    payload,
});

export const setFavouriteCard = (payload) => {
    return {
        type: SET_FAVOURITE_CARD,
        payload
    }
}
export const setMoviesFetching = payload => ({
    type: GET_MOVIE_LIST_FETCHING,
    payload,
});

export const removeMovieItem = filters => ({
    type: REMOVE_MOVIE_ITEM,
    payload: filters,
});
