import React from 'react';
import { ArrowDownIcon } from '../../../assets/icons';
import styles from './Select.module.css'
const Select = () => {
    return (
        <div>
            <ul className={styles.list}>
                <li>
                    ENG <ArrowDownIcon />
                </li>
            </ul>
        </div>
    );
};

export default Select;
