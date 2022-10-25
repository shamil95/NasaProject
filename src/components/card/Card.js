
import styles from './Card.module.css';

const Card = props => {
    const { card, handleClick } = props;
    const { Poster, Title } = card;
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img className={styles.img} src={Poster} />
                <div className={styles.title} onClick={() => handleClick(card)}>
                    {Title}
                </div>
            </div>
        </div>
    );
};

export default Card;
