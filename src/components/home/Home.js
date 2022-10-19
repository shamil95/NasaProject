import React from 'react';
import Header from '../header/Header';
import Movies from '../movies/Movies';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <header>
                <Header/>
            </header>
            <main>
                <Movies/>
            </main>
            <footer>burada footer olacaq</footer>
        </div>
    );
};

export default Home;
