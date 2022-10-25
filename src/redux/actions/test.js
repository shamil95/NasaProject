import axios from 'axios';
import { getMoviesList } from '../../services/api';
import { SET_FAVOURITE_CARD, SET_MOVIES, SET_MOVIES_LOADING } from '../types';

export const expampleTestAction = () => async (dispatch) => {
    dispatch(setMovieLoading(true))
    const response = await axios.get(getMoviesList)
    if (response) {
        dispatch(setStateMovie(response.data.Search))
    }
    dispatch(setMovieLoading(false))
};

export const setStateMovie = (payload) => {
    return {
        type: SET_MOVIES,
        payload
    }
}

export const setMovieLoading = (payload) => {
    return {
        type: SET_MOVIES_LOADING,
        payload
    }
}

export const setFavouriteCard = (payload) => {
    return {
        type: SET_FAVOURITE_CARD,
        payload
    }
}