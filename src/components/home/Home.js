import React from 'react';
import Header from '../header/Header';
import Movies from '../movies/Movies';
import styles from './Home.module.css';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div className={styles.container}>
            <header>
                <Header/>
            </header>
            <main>
                <Movies/>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
