import { ReactComponent as HeadIcon} from "../../../assets/footerhead.svg";
import styles from  "./subscribe.module.css"

const SubscribeUs = () => {
    return (
        <div className={styles.inputAreaContainer}>
            <HeadIcon />
            <h2 className={styles.h2}>Stay with us</h2>
            <div className={styles.inputArea}>
                <input className={styles.input} placeholder='Enter your email' />
                <button className={styles.btn}>Subscribe</button>
            </div>
        </div>
    );
};

export default SubscribeUs;
