import favourite from './favouritesMock';
import styles from './Favourites.module.css';
import { Fragment } from 'react';
import FavouriteCard from './favoruriteCard/FavouriteCard';

const Favourites = () => {
    return (
        <Fragment>
            <div className={styles.headTitle}>Favourites</div>
            <div className={styles.body}>
                {favourite.map(card => (
                    <FavouriteCard key={card.id} card={card} />
                ))}
            </div>
        </Fragment>
    );
};

export default Favourites;
