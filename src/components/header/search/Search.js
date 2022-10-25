import React, { useEffect } from 'react';
import icon from '../../../assets/icon.svg';
import styles from '../search/Search.module.css';
import { useDispatch } from 'react-redux';
import { changeMovieListFilters } from '../../../redux/actions/movie-list';
const Search = () => {
    const dispatch = useDispatch();

    const handleChange = e => {
        const { value } = e.target;

        dispatch(changeMovieListFilters({ keyword: value }));
    };

    return (
        <div>
            <div className={styles.inputbox}>
                <img src={icon} className={styles.icon} />
                <input
                    onChange={handleChange}
                    className={styles.input}
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Search'
                />
            </div>
        </div>
    );
};

export default Search;
