import { Link } from 'react-router-dom';
import styles from './links.module.css';

const Links = () => {
    return (
        <div className={styles.links}>
            <div className={styles.linksBloks}>
                <div>
                    <h3>Contact with us</h3>
                    <div className={styles.linksPart}>
                        <Link to='/f'>+994 50 500 50 50</Link>
                        <Link to='/f'>+994 12 111 11 11</Link>
                        <Link to='/f'>infoamchamcsr@gmail.com</Link>
                        <Link to='/f'>VAT: 319656475 Company no.11843590 Registered in England & Wales</Link>
                    </div>
                </div>
            </div>
            <div className={styles.linksBloks}>
                <div>
                    <h3>About us</h3>
                    <div className={styles.linksPart}>
                        <Link to='/f'>About AmCham CSR Platform</Link>
                        <Link to='/f'>Our team</Link>
                    </div>
                </div>
            </div>
            <div className={styles.linksBloks}>
                <div>
                    <h3>Discover</h3>
                    <div className={styles.linksPart}>
                        <Link to='/f'>Projects</Link>
                        <Link to='/f'>Contributors</Link>
                    </div>
                </div>
            </div>
            <div className={styles.linksBloks}>
                <div>
                    <h3>Other links</h3>
                    <div className={styles.linksPart}>
                        <Link to='/f'>News</Link>
                        <Link to='/f'>Partners</Link>
                        <Link to='/f'>Video tutorial</Link>
                        <Link to='/f'>AmCham website</Link>
                    </div>
                </div>
            </div>
            <div className={styles.linksBloks}>
                <div>
                    <h3>Policies</h3>
                    <div className={styles.linksPart}>
                        <Link to='/f'>Community guidlines</Link>
                        <Link to='/f'>Terms of use</Link>
                        <Link to='/f'>Privacy Policy</Link>
                        <Link to='/f'>Legal</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Links;
