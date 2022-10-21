import { Link } from 'react-router-dom';
import styles from './favourites.module.css';
import { Fragment } from 'react';

const FavouritesCard = probs => {
    const { image, title } = probs;
    return (
        <Fragment>
            <div className={styles.card}>
                <img className={styles.img} src={image} />
                <div>
                    <Link className={styles.title} to='/news'>
                        {title}
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default FavouritesCard;
