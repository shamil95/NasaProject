import React from 'react';
import styles from './Registr.module.css'

const Registr = () => {
    return (
        <div className={styles.btn_group}>
         <a className={styles.btn_login}>Log in</a>
         <a className={styles.btn_registr}>Registr</a>
        </div>
    );
};

export default Registr;
