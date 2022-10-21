import { Link } from 'react-router-dom';
import styles from './FavouriteCard.module.css';
import { Fragment } from 'react';

const FavouriteCard = props => {
    const { card } = props;
    const { imgUrl, title } = card;
    return (
        <Link className={styles.container} to={'#'}>
            <div className={styles.card}>
                <img className={styles.img} src={imgUrl} />
                <div className={styles.title}>
                    {title}
                </div>
            </div>
        </Link>
    );
};

export default FavouriteCard;
