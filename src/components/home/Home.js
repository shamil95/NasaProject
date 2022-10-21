import React from 'react';
import Header from '../header/Header';
import Movies from '../movies/Movies';
import styles from './Home.module.css';
import Footer from '../Footer/Footer';
import CartItem from '../favourites/createcard/CartItem';

const Home = () => {
    return (
        <div className={styles.container}>
            <header>
                <Header />
            </header>
            <main>
                <Movies />
            </main>
            <CartItem />
            <Footer />
        </div>
    );
};

export default Home;
