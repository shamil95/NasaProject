import React from 'react';
import logo from '../../assets/logo.svg';
import styles from '../header/Header.module.css';
import Select from '../header/select/Select';
import Registr from './registr/Registr';
import menu from '../../assets/menu.svg';
import Search from './search/Search';

const Header = () => {
    return (
        <div className={styles.header}>
        <div>
          <img src={logo}/>
        </div>
       <div className={styles.header}>
       <Search/>
       <Select/>
       <Registr/>
        <img src={menu}/>
       </div>
     
  
        </div>
    );
};

export default Header;
