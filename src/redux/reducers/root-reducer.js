import { combineReducers } from 'redux';
import movieList from './movie-list';

const rootReducer = combineReducers({
    movieList,
});

export default rootReducer;
