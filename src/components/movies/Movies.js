import React, { useEffect, useMemo } from 'react';
import styles from './Movies.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieList, removeMovieItem } from '../../redux/actions/test';

const Movies = () => {
    const dispatch = useDispatch();
    const { data: movieList, isFetching, filters } = useSelector(state => state.movieList);
    const { keyword } = filters;

    const filteredMovieList = useMemo(() => {
        return movieList.filter(item => item.Title.toLowerCase().includes(keyword.toLowerCase()));
    }, [keyword]);

    useEffect(() => {
        dispatch(getMovieList());
    }, []);

    const handleClick = () => {};
    const handleRemoveItem = id => {
        const filteredData = movieList.filter(item => item.imdbID !== id);
        dispatch(removeMovieItem(filteredData));
    };

    return (
        <div>
            <h2 className={styles.section_title}>Movies</h2>
            {isFetching ? (
                <span>Loading...</span>
            ) : (
                <div className={styles.section_container}>
                    {filteredMovieList.map(item => (
                        <div key={item.imdbID} className={styles.item_box}>
                            <div className={styles.img_box} onClick={() => handleClick(item.src)}>
                                <img src={item.Poster} />
                                <h3 className={styles.movie_title}>{item.Title}</h3>
                            </div>
                            <a className={styles.addtoFavorite}>addToFavorites</a>
                            <span onClick={() => handleRemoveItem(item.imdbID)} className={styles.remove_movie}>
                                X
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Movies;
