import React, { useEffect } from 'react';
import styles from './Movies.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { expampleTestAction } from '../../redux/actions/test';
import Card from '../card/Card';
import { setFavouriteCard } from '../../redux/actions/test';

const Movies = () => {
    const dispatch = useDispatch();
    const { movies, isLoading } = useSelector(state => state.test);

    useEffect(() => {
        dispatch(expampleTestAction());
    }, []);

    const handleClick = (card) => {
        dispatch(setFavouriteCard(card))
    }

    return isLoading ? (
        <span>Loading</span>
    ) : (
        <div>
            <h2 className={styles.section_title}>Movies</h2>
            <div className={styles.container}>
                {movies.map(movie => {
                    return <Card key={movie.Title} card={movie} handleClick={handleClick} />;
                })}
            </div>
        </div>
    );
};

export default Movies;
