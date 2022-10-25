import styles from './favourites.module.css';
import { Fragment } from 'react';
import Card from '../card/Card';
import { useSelector } from 'react-redux';

const Favourites = () => {
    const { favouriteMovies } = useSelector(state => state.movieList)

    return (
        <Fragment>
            <div className={styles.headTitle}>Favourites</div>
            <div className={styles.body}>
                {
                    favouriteMovies.map(favCard=>{
                    return(
                        <Card key={favCard.Title} card={favCard}/>
                    )
                })
              }
            </div>
        </Fragment>
    );
};

export default Favourites;
