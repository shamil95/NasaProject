import favourite from '../Favourite';
import CreateCard from './CreateCard';
import styles from './cartItem.module.css';
import { Fragment } from 'react';

const CartItem = id => {
    return (
        <Fragment>
            <div className={styles.headTitle}>Favourites</div>
            <div key={id} className={styles.body}>
                {favourite.map(CreateCard)}
            </div>
        </Fragment>
    );
};

export default CartItem;
