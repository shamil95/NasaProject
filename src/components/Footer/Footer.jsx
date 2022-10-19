import SubscribeUs from './subscribe/SubsribeUs';
import SosialApps from './sosialapps/SosialApps';
import Links from './links/Links';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <SubscribeUs />
            <SosialApps />
            <Links />
        </div>
    );
};

export default Footer;