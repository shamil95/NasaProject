import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './Home.module.css';
import Footer from '../footer/Footer';

const Home = () => {
    return (
        <div className={styles.container}>
            <header>burada header olacaq</header>
            <main>burada movies componenti olacaq</main>
            <Footer/>
        </div>
    );
};

export default Home;
