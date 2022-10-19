import { Link } from 'react-router-dom';
import { ReactComponent as FaceBook } from '../../../assets/Facebook.svg';
import { ReactComponent as Tweeter } from '../../../assets/tweeter.svg';
import { ReactComponent as Instagram } from '../../../assets/instagram.svg';
import { ReactComponent as Linkedin } from '../../../assets/linkedin.svg';
import { ReactComponent as Youtube } from '../../../assets/youtube.svg';
import { Fragment } from 'react';
import styles from './sosial-app.module.css';

const SosialApps = () => {
    return (
        <Fragment>
            <div className={styles.appsContainer}>
                <div className='apps'>
                    <Link className={styles.appsBetweenSpace} to='/media'>
                        <FaceBook />
                    </Link>
                    <Link className={styles.appsBetweenSpace} to='/media'>
                        <Tweeter />
                    </Link>
                    <Link className={styles.appsBetweenSpace} to='/media'>
                        <Instagram />
                    </Link>
                    <Link className={styles.appsBetweenSpace} to='/media'>
                        <Linkedin />
                    </Link>
                    <Link className={styles.appsBetweenSpace} to='/media'>
                        <Youtube />
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default SosialApps;
