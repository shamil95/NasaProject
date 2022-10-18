import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './Home.module.css';
import Footer from '../Footer/Container/Footer-container';


const Home = () => {
    return (
        <div className={styles.container}>
            <Footer />
        </div>
    );
};

export default Home;
