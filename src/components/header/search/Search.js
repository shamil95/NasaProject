import React from 'react';
import icon from '../../../assets/icon.svg';
import styles from '../search/Search.module.css';
const Search = () => {
    return (
        <div>
            <div className={styles.inputbox}>
                <img src={icon} className={styles.icon} />
                <input className={styles.input} type='text' id='name' name='name' placeholder='Search' />
            </div>
        </div>
    );
};

export default Search;
